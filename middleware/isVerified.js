const user = require('../api/database/models/userModel')

module.exports = (req, res, next) => {
    user.findById(req.session.userId, (error, user) => {
        if (user && user.isVerified == true && !error) {
            req.session.isVerified = true
            req.session.isModo = true
            next()
        } else {
            console.log(error);
            return res.redirect('/signup')
            
        }
    })
}
