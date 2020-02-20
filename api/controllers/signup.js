const usermodel = require('../database/models/userModel')

module.exports = {
    get: (req, res) => {
        res.render('signup')
    },

    postSignup: (req, res) => {
        const Pass = req.body.password
        const confPass = req.body.confPassword

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
            res.render('home')
        }
    }
}
