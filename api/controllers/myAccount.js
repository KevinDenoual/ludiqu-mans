const userModel = require('../database/models/userModel')

module.exports = {
    getMyAccount: async (req, res) => {
        const dbuser = await userModel.findById(req.params.id)
        res.render('admin/myAccount', { dbuser })
    },
}
