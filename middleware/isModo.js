const User = require('../api/database/models/userModel')

module.exports = (req, res, next) => {
    User.findById(req.session.userId, (error, user) => {
        if (user && user.isModo == true && !error) {
            next()
        } else {
            return res.redirect('/signup')
        }
    })
}