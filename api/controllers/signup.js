const usermodel = require('../database/models/userModel')

module.exports = {
    get: (req, res) => {
        res.render('signup', {
            errors: req.flash('gestError')
        })
    },

    postSignup: (req, res) => {
        const Pass = req.body.password
        const confPass = req.body.confPassword
        const check = req.body.gridCheck
        

        usermodel.create(
            req.body, (error, user) => {
                const gestError = Object.keys(error.errors).map(key => error.errors[key].message)
                req.flash('gestError', gestError)
                if (Pass !== confPass ||  check !== 'on' ) {

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
                
            })
    }


    // si dessus le sessai en cours selon la video 6.13 avec les fonction de recuperation d'erreur time : 5,13












    // le code si desssous est fonctionnel 





}

