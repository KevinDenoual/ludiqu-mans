const userModel = require('../database/models/userModel')
const bcrypt = require('bcrypt')

module.exports = {
    getMyAccount: async (req, res) => {
        const dbuser = await userModel.findById(req.params.id)
        res.render('admin/myAccount', { dbuser })
    },

    putMyAccount: async (req, res) => {
        let query = { _id: req.params.id }
        const Pass = req.body.password
        const myuser = await userModel.findById(req.params.id)

        bcrypt.hash(Pass, 10, (err, encrypted) => {
            PassEncrypted = encrypted
        })

        bcrypt.compare(Pass, myuser.password).then((same) => {  //same est un booleen
            if (same) {                
                userModel.findOneAndUpdate(
                    query,
                    {
                        name: req.body.name,
                        email: req.body.email,
                    },
                    (err) => {
                        if (!err) {
                            res.redirect('/')
                        } else {
                            res.rend(err)
                        }
                    },
                )
            } else {
                res.redirect('/')
            }
        })
    }
}
