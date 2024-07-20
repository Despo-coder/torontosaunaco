import connectDB from '@/utils/connectDB';
import nodemailer from 'nodemailer';
import Order from '@/models/Order'; // Adjust the path based on your project structure


export const dynamic = 'force-dynamic';

// Email sending setup
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use your email service
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Email content
const createEmailContent = (order) => {
  return `
    <p>Order ID: ${order._id}</p>
    <p>Customer Name: ${order.customerName}</p>
    <p>Order Total: ${order.total}</p>
    <p>Order Details: ${order.details}</p>
  `;
};

// Send emails function
async function sendEmails(orders) {
  for (const order of orders) {
    // Send email to customer
    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: order.customerEmail,
      subject: 'Your Order Confirmation',
      html: createEmailContent(order),
    });

    // Send email to merchant
    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: process.env.MAIL_USER,
      subject: 'New Order Received',
      html: createEmailContent(order),
    });
  }
}

export async function GET() {

    if (req.headers.get('Authorization') !== `Bearer ${process.env.CRON_SECRET}`) {
        return new Response('Unauthorized', { status: 401 });
      }
    await connectDB();
  
    const orders = await Order.find({ emailSent: false });
  
    if (orders.length === 0) {
      return new Response(JSON.stringify({ message: 'No new orders to process.' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  
    await sendEmails(orders);
  
    await Order.updateMany(
      { _id: { $in: orders.map(order => order._id) } },
      { $set: { emailSent: true } }
    );
  
    return new Response(JSON.stringify({ message: 'Emails sent successfully.' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  