const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt')
const User = require('../../database/models/userModel')

module.exports = { 
    postCreateUser: async (req, res, next) => {
        const mailUsed = await User.find({ email: req.body.email })

        if (mailUsed) {
            if (req.body.passeword !== req.body.passwordConfirm) {
                console.log('error passeword')
                res.render('login')     
            } else {
                console.log('password OK')
                User.create({
                    ...req.body,
                }, (error, user) => {
                    if (error) {
                        res.redirect('/')
                    } else {
                        console.log('Success create')
                        res.redirect('/')
                        
                    }
                })
                
            }
        } else {
            res.send('mail deja utilisé')
        }
    },

    getDeleteUser: (req, res) => {
        User.findByIdAndRemove(
            req.params.id,
            (err) => {
                if (!err) {
                    console.log('delete ok')
                } else {
                    res.redirect('/')
                }
            })
        res.redirect('/')
    }
}

module.exports = router