const express = require('express')
const contactModel = require('../database/models/contactModel')

module.exports = {
    getTicketAdmin: async (req, res) => {
        const dbMessageAdmin = await contactModel.find(req.params.id)
        res.render('admin/ticketAdmin', { dbMessageAdmin })
    },

    deleteTicketAdmin: (req, res) => {
        const query = {_id: req.params.id}

        contactModel.deleteOne(
            query,

            (err) => {
                if (!err) {
                    res.render('admin/ticketAdmin')
                } else {
                    res.send(err)
                }
            }
        )
    }
}