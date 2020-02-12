const userModel = require('../database/models/userModel')


module.exports = {
    getlistUser: async (req, res) => {
        const dbuser = await userModel.find(req.params.id)
        res.render('admin/userlist', { dbuser })
    },
    putlistUser: (req, res) => {
        const myuser = { _id: req.params.id }

        userModel.findOneAndUpdate(
            myuser,
            {
                name: req.body.name,
                isVerified: req.body.isVerified,
                isModo: req.body.isModo,
                isAdmin: req.body.isAdmin,
                isBan: req.body.isBan
            },
            { multi: true },
            (err) => {
                if (!err) {
                    res.redirect('/listUser')
                } else {
                    res.rend(err)
                }
            }
        )
    },
    deleteOnelistUser: (req, res) => {
        const myuser = { _id: req.params.id }
        userModel.deleteOne(myuser,
            (err) => {
                if (!err) {
                    res.redirect('/listUser')
                } else {
                    res.send(err)
                }
            })
    }
}