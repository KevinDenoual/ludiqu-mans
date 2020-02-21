const express = require('express')
const path = require('path')
const mkpmodel = require('../database/models/mkpModel')
const userModel = require('../database/models/userModel')


module.exports = {
    getmkp: async (req, res) => {
        const dbMkp = await mkpmodel.find({})
        const dbUser = await userModel.find({})
        // console.log(dbMkp);   affiche le contenu de la db dans la console     
        res.render('mkp/mkp', {dbMkp, dbUser})
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
    // signalement des annonces
    putmkp: (req, res) => {
        const mymkp = {_id: req.params.id}  
        mkpmodel.findOneAndUpdate(
            mymkp,
            {
                isSignal: true
            },
            (err) => {
                if (!err) {
                    res.redirect('/contact')
                } else {
                    res.rend(err)
                }
            }
        )
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

