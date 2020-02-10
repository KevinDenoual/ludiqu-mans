const userModel = require('../database/models/userModel')

module.exports = {
    getlistUser: async (req, res) => {
        const dbuser = await userModel.find(req.params.id)
        res.render('userlist', { dbuser })   
    },
}