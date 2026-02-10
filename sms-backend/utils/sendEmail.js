const nodemailer = require("nodemailer");

async function main() {
  // Create a test account
  const testAccount = await nodemailer.createTestAccount();

  // Create a transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  // Send a test email
  const info = await transporter.sendMail({
    from: '"Example Sender" <sender@example.com>',
    to: "recipient@example.com",
    subject: "Hello from Nodemailer",
    text: "This is a test email sent using Nodemailer!",
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

main().catch(console.error);
