const usermodel = require('../database/models/userModel')

module.exports = {
    get: (req, res) => {
        res.render('signup', { errors: req.flash('gestError') })
    },

    postSignup: (req, res) => {
        const Pass = req.body.password
        const confPass = req.body.confPassword
        const check = req.body.gridCheck
        usermodel.create(
            req.body, (error, user) => {
                if (error) {
                    const gestError = Object.keys(error.errors).map(key => error.errors[key].message)
                    req.flash('gestError', gestError)
                    console.log('coucou');
                    return res.redirect('/signup')
                    console.log('recoucou');
                    
                    
                    
                }
                // next()
            })

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
                    isBan: false,
                },
            )
            res.render('home')
        }

    }
}
