const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const User = require('../../database/models/userModel')

module.exports = {
    postLogin: async (req, res) => {
        const userAuth = await User.findOne({ email: req.body.email })
        if (!userAuth) {
            // console.log('pas dans la db')
            res.redirect('/signup')
        } else {
            const { email, password } = req.body
            const dbUser = await User.find({})
            const sess = req.session
            // console.log(req.body)

            User.findOne({ email }, (err, User) => {
                sess.userId     = User.id
                sess.name       = User.name
                sess.email      = User.email
                sess.status     = User.status
                sess.isVerified = User.isVerified
                sess.isAdmin    = User.isAdmin
                sess.isModo     = User.isModo
                sess.isBan      = User.isBan
                sess.imgUser    = User.imgUser

                if (User) {
                    if (sess.status === 'user') {
                        bcrypt.compare(password, User.password, (err, same) => {
                            if ( same ) {
                                req.session.userId = User._id
                                // console.log('OK 1')
                                res.redirect('/')
                                // res.render('success', { dbUser, sess })
                            } else if ( err ) {
                                console.log(err);
                                
                            }
                        })
                    }
                }
            })
        }
    }
}

