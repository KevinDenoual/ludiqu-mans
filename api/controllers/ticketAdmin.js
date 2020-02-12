const express = require('express')
const contactModel = require('../database/models/contactModel')


module.exports = {
    getTicketAdmin: async (req, res) => {
        const dbMessageAdmin = await contactModel.find(req.params.id)
        const dbContact = await contactModel.find({ sujet: "contact" })
        const dbSupport = await contactModel.find({ sujet: "support" })


        res.render('admin/ticketAdmin', { dbMessageAdmin, dbContact, dbSupport })
    },

    deleteTicketAdmin: (req, res) => {
        const query = { _id: req.params.id }

        contactModel.deleteOne(
            query,

            (err) => {
                if (!err) {
                    res.redirect('/ticketAdmin')
                } else {
                    res.send(err)
                }
            }
        )
    }
}