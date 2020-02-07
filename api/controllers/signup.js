const usermodel = require('../database/models/userModel')

module.exports = {
    get: (req, res) => {
        res.render('signup')
    },

    postSignup: (req, res) => {
        const pass = req.body.password
        const confPass = req.body.confPassword
        if (pass !== confPass) {
            res.redirect('/signup')
        } else {
            usermodel.create(
                {
                    email: req.body.email,
                    name: req.body.name,
                    password: req.body.password,
                    isVerified: false,
                    isModo: false,
                    isAdmin: false,
                    isBan: false,
                },
            )
            console.log('mot de passe is ok')
            res.render('home')
        }
    }
}