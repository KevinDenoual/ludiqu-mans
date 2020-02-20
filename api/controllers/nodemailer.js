const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: "gmail",
    secure: false,
    port: "587",
    auth: {
        user: "regis.dupond666@gmail.com",
        pass: "Arinfo2019"
    }
})

// Nodemailer Test 
module.exports = {
    getNodemailerTest: (req, res) => {
        const mailOption = {
            from: "regis.dupond666@gmail.com",
            to: req.session.email, 
            subject: "confirme email",
            html: '<h2>Mon premier mail avec nodemailer, Successfull</h2>'
        }
        transporter.sendMail(mailOptions, (err, info) => {
            if (err)
                console.log(err);
            else
                console.log(info);
        });
        res.redirect('back')
    }
}