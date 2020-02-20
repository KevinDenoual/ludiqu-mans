const userModel = require('../database/models/userModel')


module.exports = {
    getlistUser: async (req, res) => {
        const dbuser = await userModel.find(req.params.id)
        res.render('admin/userlist', { dbuser })
    },
    putlistUser: (req, res) => {
        const myuser = { _id: req.params.id }
        if (req.body.status === 'isAdmin') {
            userModel.findOneAndUpdate(
                myuser,
                {
                    name: req.body.name,
                    isVerified: true,
                    isModo: true,
                    isAdmin: true,
                    isBan: false
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
        } else if (req.body.status === 'isModo') {
            userModel.findOneAndUpdate(
                myuser,
                {
                    name: req.body.name,
                    isVerified: true,
                    isModo: true,
                    isAdmin: false,
                    isBan: false
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
        } else if (req.body.status === 'isVerified') {
            userModel.findOneAndUpdate(
                myuser,
                {
                    name: req.body.name,
                    isVerified: true,
                    isModo: false,
                    isAdmin: false,
                    isBan: false
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
        } else if (req.body.status === 'isBan') {
            userModel.findOneAndUpdate(
                myuser,
                {
                    name: req.body.name,
                    isVerified: false,
                    isModo: false,
                    isAdmin: false,
                    isBan: true
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
        }
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