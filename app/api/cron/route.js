import connectDB from "@/config/db";
import Orders from "@/models/Orders";
import nodemailer from 'nodemailer';



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
if(order.items){
    const items = order.items.map(item => `<li>${item.name} - ${item.quantity}</li>`).join('');
    return items;
}

  return `
    <p>Order ID: ${order._id}</p>
    <p>Customer Name: ${order.cardholderName}</p>
    <p>Order Total: ${order.amount}</p>
    <p>Order Details: ${items}</p>
  `;
};

// Send emails function
async function sendEmails(orders) {
  for (const order of orders) {
    // Send email to customer
    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: order.email,
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
  