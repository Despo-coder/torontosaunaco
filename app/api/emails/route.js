import nodemailer from 'nodemailer';

export const dynamic = 'force-dynamic';
export async function POST(req, res) {
const { name, email, phone, message, subject } = await req.json();

//   Create a transporter object using SMTP transport
  // let transporter = nodemailer.createTransport({
  //   host: process.env.MAIL_HOST,
  //   port: process.env.MAIL_PORT,
  //   service: 'gmail', // e.g., 'gmail'
  //   auth: {
  //     user: process.env.MAIL_USER, // Your email
  //     pass: process.env.MAIL_PWD, // Your email password or app-specific password
  //   },
  // });


  let transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    service: 'gmail', // e.g., 'gmail'
    auth: {
      user: process.env.MAIL_USER, // Your email
      pass: process.env.MAIL_PWD, // Your email password or app-specific password
    },
  });

// Email options

  let mailOptions = {
    from: process.env.MAIL_USER,
    to: 'thetorontosaunaco@gmail.com', // Recipient email address
    subject: `Re: ${subject}` || 'New message from contact form',
    html: `Name: ${name}<br>Email: ${email}<br>Phone: ${phone}<br>Message: ${message}`,
  };

 // Send email

  try {
   
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ message: error.message}), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
