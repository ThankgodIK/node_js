import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ikefuamakelechi@gmail.com",
    pass: "placeholder",
  },
});

const mailOptions = {
  from: "ikefuamakelechi@gmail.com",
  to: "manueleze36@gmail.com",
  subject: "Sending Email using Node.js",
  text: "test. test!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
