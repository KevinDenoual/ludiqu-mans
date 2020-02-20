// const dotenv = require('dotenv');
// const nodemailer = require('nodemailer')
// const path = require('path')



// const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     service: "gmail",
//     secure: false,
//     port: "587",
//     auth: {
//         user: 'regis.dupond666@gmail.com',
//         pass: 'Arinfo2019',
//     tsl: {
//         rejectUnauthorized: false
//     }
//     }
// })

// // Nodemailer Test 
// module.exports = {
//     getNodemailerTest: (req, res) => {
//         const mailOption = {
//             from: "regis.dupond666@gmail.com",
//             to: req.session.email, 
//             subject: "confirme email",
//             html: '<h2>Mon premier mail avec nodemailer, Successfull</h2>'
//         }
//         transporter.sendMail(mailOptions, (err, info) => {
//             if (err)
//                 console.log(err);
//             else
//                 console.log(info);
//         });
//         res.redirect('back')
//     }
// }


const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass // generated ethereal password
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>" // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);
