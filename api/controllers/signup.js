const usermodel = require('../database/models/userModel')
const nodemailer = require('nodemailer')
const SMTPConnection = require('nodemailer/lib/smtp-connection')
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: 'gmail',
    port: 587,
    secure: false,
    auth: {
        user: "regis.dupond666@gmail.com",
        pass: "Arinfo2019"
    },
    tls:{
        rejectUnauthorized: false
    }
  })
let connection = new SMTPConnection(Option.host)


module.exports = {
    get: (req, res) => {
        res.render('signup')
    },

    postSignup: (req, res) => {
        const Pass = req.body.password
        const confPass = req.body.confPassword
        const host = connection
        const rand = Math.floor((Math.random() * 100) + 54)
        const link = "http://" + host + "/" + rand
        
        const mailOptions = {
            from: 'regis.dupond666@gmail.com', // sender address
            to: req.session.email, // list of receivers
            subject: 'Please confirm your Email account', // Subject line
            html: "Hello,<br> Please Click on the link to verify your email.<br><a href=" + link + ">Click here to verify</a>",// plain text body
            rand: rand
            
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
                transporter.sendMail(mailOptions, function (err, res) {
                    if (err) {
                        console.log(err)
                    } else {
                        
                        res.redirect('/')
                    }
                      
                 })
            )
          
            
            
        }
    },
      
    
}
