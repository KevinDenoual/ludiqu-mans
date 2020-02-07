const express = require('express')
    , path = require('path')
    , mkpmodel = require('../database/models/mkpModel')
    , fileupload = require('express-fileupload')
    , moment = require('moment')


moment.locale('fr'); // 'fr'



module.exports = {
    getmkp: async (req, res) => {
        const dbMkp = await mkpmodel.find({})

        // console.log(dbMkp);   affiche le contenu de la db dans la console     
        res.render('mkp/mkp', {dbMkp})
    },
    getmkpCreate: (req, res) => {
        res.render('mkp/mkpCreate')

    },

    postmkpCreate:  (req, res) => {
        // const { image } = req.files)
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
                    res.redirect('/mkp')
                })
        // })
    },


    
    // supprimé une annonce

    deletemkp: (req, res) => {
        mkpmodel.deleteOne(
            { 
                _id: req.params.id 
            },
            (err) => {
                if (!err){
                    res.redirect('/mkp')
                } else {
                    res.send(err)
                }
            }
            
        )
    }
}

