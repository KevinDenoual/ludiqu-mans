const userModel = require('../database/models/userModel')

module.exports = {
    getlistUser: async (req, res) => {
        const dbuser = await userModel.find(req.params.id)
        res.render('admin/userlist', { dbuser })
    },
    putlistUser: async (req, res) => {
        const dbUser = await userModel.findById(req.params._id)
        const myuser = { _id: req.params.id }
        console.log(myuser);

        userModel.findOneAndUpdate(
            myuser,
            {
                name: req.body.name
            },

            (err) => {
                if (!err) {
                    res.redirect('/userlist')
                } else {
                    console.log("t'as fait de la merde"); 
                    res.rend(err)
                }
            }
        )
    }
}