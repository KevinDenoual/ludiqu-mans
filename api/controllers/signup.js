const usermodel = require('../database/models/userModel')

module.exports = {
    get: (req, res) => {
        res.render('signup')
    },

    postSignup: (req, res) => {

            // if(req.body.password === req.body.confPassword){
            //     console.log('mot de passe is ok');
                
            // }










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
        console.log(req.body);
        
        res.render('signup')
    }
}