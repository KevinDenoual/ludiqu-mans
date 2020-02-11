const usermodel = require('../database/models/userModel')

module.exports = {
    get: (req, res) => {
        res.render('signup', { errors: req.flash('gestError') })
    },

    postSignup: (req, res) => {
        const Pass = req.body.password
        const confPass = req.body.confPassword
        const check = req.body.gridCheck

        if (Pass !== confPass || check !== 'on') {
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
                (error, user) => {
                    if (error) {
                        const gestError = Object.keys(error.errors).map(key => error.errors[key].message)
                        req.flash('gestError', gestError)

                        return res.redirect('/signup')
                    } else {
                        res.render('home')
                    }
                })
        }
    },


    


}
