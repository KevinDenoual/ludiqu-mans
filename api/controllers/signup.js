const usermodel = require('../database/models/userModel')

// Nodemailer import + setup
const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: 'gmail',
    port: 587,
    secure: false,
    auth: {
        user: "regis.dupond666@gmail.com",
        pass: "Arinfo2019"
    },
    tls: {
        rejectUnauthorized: false
    }
})

var rand, mailOptions, host, link

module.exports = {
    get: (req, res) => {
        res.render('signup')
    },

    postSignup: (req, res) => {
        const Pass = req.body.password
        const confPass = req.body.confPassword

        // Nodemailer config  
        rand = Math.floor((Math.random() * 100) + 54)
        host = req.get('host')
        link = "http://" + req.get('host') + "/verify/" + rand
        mailOptions = {
            from: 'regis.dupond666@gmail.com', 
            to: req.body.email, 
            subject: 'Please confirm your Email account',
            rand: rand,
            html: "Hello,<br> Please Click on the link to verify your email.<br><a href=" + link + ">Click here to verify</a>",
        }
        console.log(mailOptions)
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
                // Nodemailer transport      
                transporter.sendMail(mailOptions, (err, res, next) => {
                    if (err) {
                        console.log(err)
                        res.send("error")
                    } else {
                        console.log(mailOptions);
                        console.log('Message envoyé');
                        next()
                    }
                }),
                res.redirect('/home')
            )
        }
    },

    // Nodemailer verif
    verifMail: (req, res) => {
        console.log(req.protocol + "://" + req.get('host'))
        console.log(mailOptions)
        if ((req.protocol + "://" + req.get('host')) == ("http://" + host)) {
            console.log("Domain is matched. Information is from Authentic email")
            if (req.params.id == mailOptions.rand) {
                console.log("email is verified")
                res.send("Email " + mailOptions.to + "is been successfully verifed")
            } else {
                console.log("email is not verified")
                res.send(" Bad Request")
            }
        } else {
            res.send('Request is from unknow source')
        }
    }
}
