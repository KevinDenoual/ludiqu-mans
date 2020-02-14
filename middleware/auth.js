const userCollection = require('../api/database/models/userModel')

module.exports = (req, res, next) => {
        userCollection.findById(req.session.userId, 
            (error, user) => {
            if (error || !user) {
                return res.redirect('/')
            }
            next()
        })

    }
