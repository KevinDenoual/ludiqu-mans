const express = require('express')
    , path = require('path')
    , mkpmodel = require('../database/models/mkpmodel')
    , fileupload = require('express-fileupload')
    , moment = require('moment')
    

    moment.locale('fr'); // 'fr'



module.exports = {
    getmkp: async (req, res) => {
        const dbMkp = await mkpmodel.find({})
        // console.log(dbMkp);   affiche le contenu de la db dasn la console     
        res.render('mkp/mkp', {dbMkp})
    },
    getmkpCreate: (req, res) => {
        res.render('mkp/mkpCreate')

    },

    postmkpCreate: async (req, res) => {
        // const { image } = req.files
        const dbMkp = await mkpmodel.find({})
        // const uploadFile = path.resolve(__dirname, '..', 'public/ressources/images/mkp', image.name)

        // image.mv(uploadFile, (error) => {
            mkpmodel.create(
                {
                    title: req.body.title,
                    content: req.body.content,
                    seller: req.body.seller,
                    price: req.body.price,
                    // image: `/ressources/images/mkp/${image.name}`,
                    createDate: req.body.createDate,
                    isSignal: false,
                    interessed: false
                }
                , (error, post) => {
                    res.render('mkp/mkpCreate')
                })
        // })
    },
}

