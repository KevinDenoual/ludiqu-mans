const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const User = require('../../database/models/userModel')

module.exports = {
    get: async (req, res, next) => {
        let userAuth = await User.findOne({ email: req.body.email})
        if (!userAuth) {
            console.log('pas dans la db');
            res.redirect('/signup');
        } else {
            const { email, password } = req.body;
            const dbUser = await User.find({});
            const sess = req.session

            User.findOne({ email }, (error, User) => {
                sess.name       = User.name
                sess.email      = User.email
                sess.status     = User.status
                sess.isVerified = User.isVerified
                sess.imgUser    = User.imgUser

                if (User) {
                    if (sess.stauts === 'user') {
                        bcrypt.compare(password, User.passeword, (error, same) => {
                            if (same) {
                                req.session.userId = User._id
                                console.log('OK 1')
                                res.render('success', { dbUser, sess })
                            } else {
                                if (req.body.passeword === User.password) {
                                    console.log('OK 2')
                                    res.render('success')                      
                                } else {
                                    console.log('Mot de passe incorrect')
                                    res.redirect('/signup')                       
                                }
                            }
                        })
                    }
                }
            })
        }
    }
}

module.exports = router