const express = require('express')
const ContactModel = require('../database/models/contactModel')

module.exports = {
    getContact: (req, res) => {
        res.render('contact')
    },

    postContact: (req, res) => {
        
            ContactModel.create(
                {
                    email: req.body.email,
                    sujet: req.body.sujet,
                    message: req.body.message
                },
                
            )

            res.render('contact')

        }

        

            

    }


