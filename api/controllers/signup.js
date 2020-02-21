const usermodel = require('../database/models/userModel')
const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: 'gmail',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: "regis.dupond666@gmail.com",
        pass: "Arinfo2019"
    }
  })


module.exports = {
    get: (req, res) => {
        res.render('signup')
    },

    postSignup: (req, res) => {
        const Pass = req.body.password
        const confPass = req.body.confPassword
        const mailOptions = {
            from: 'regis.dupond666@gmail.com', // sender address
            to: req.body.email, // list of receivers
            subject: 'Félicitation !', // Subject line
            html: '<h2>Mon premier mail avec nodemailer, Successfull</h2>'// plain text body
          }

        if (Pass !== confPass) { //comparaison des mots de passe
            res.redirect('/signup')
        } else {
            usermodel.create(
                {
                    email: req.body.email,
                    name: req.body.name,
                    password: Pass,
                    isVerified: false,
                    isModo: false,
                    isAdmin: false,
                    isBan: false
                },
            )
            transporter.sendMail(mailOptions, function (err, info) {
                if(err)                       
                  console.log(err)
                else
                  console.log(info);
                  res.render('home')
             });
            
            
        }
    },
      
    
}
