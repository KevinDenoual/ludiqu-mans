const userCollection = require('../api/database/models/userModel')


module.exports = (req, res, next) => {

    if(req.session.userId) {
        return res.send('connection réussi !')

    }

    next ()

}