const express = require('express')
const ContactModel = require('../database/models/contactModel')

module.exports = {
    getContact: (req, res) => {
        res.render('contact')
    },

    postContact: async (req, res) => {

        ContactModel.create(
            {
                ...req.body
            },
            
        ),

            res.send('message envoyé')

    },
}

