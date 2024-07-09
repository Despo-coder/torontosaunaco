import nodemailer from 'nodemailer';

// export const sendEmail = async (sender, recepient, subject, message) => {
//   try {
//     const transporter = nodemailer.createTransport({
//       host: process.env.MAIL_HOST,
//       port: process.env.MAIL_PORT,
//       secure: process.env.NODE_ENV !== 'production',
//       service: 'gmail',
//       auth: {
//         user: process.env.MAIL_USER,
//         pass: process.env.MAIL_PWD
//       }
//     });

//     const mailOptions = {
//       sender: process.env.MAIL_USER,
//       recipient: recepient,
//       subject,
//      message
//     };

//     await transporter.sendMail(mailOptions);
//     console.log('Email sent successfully');
//   } catch (error) {
//     console.error('Error sending email:', error);
//     throw error;
//   }
// };

const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: process.env.NODE_ENV !== 'production',
    service: 'gmail',
    auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PWD
  }
});

export const sendEmail = async (sender, recepient, subject, message) => {
try {
  await transporter.sendMail({
    from: sender,
    to: recepient,
    subject: subject,
    html: message,
    text: message
  });
  return new Response(JSON.stringify({ message: 'Email sent successfully!' }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
} catch (error) {
  return new Response(JSON.stringify({ message: error.message}), {
    status: 500,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
}