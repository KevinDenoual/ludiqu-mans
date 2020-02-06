// Import
const express = require('express');
const router = express.Router();
const path = require('path');
const JeuxModel = require('../database/models/JeuxModel');



module.exports = {
    getJeux: async (req, res) => {
        const dbJeuModel = await JeuxModel.find(req.params.id)
        // console.log(dbJeuModel);       
        res.render('jeux/jeux', { dbJeuModel })
    },

    getJeuSingle: async (req, res) => {
        const dbJeuModel = await JeuxModel.findById(req.params.id)   
        res.render('jeux/jeuSingle', { dbJeuModel })
    },

    getJeuCreate: (req, res) => {

        // if (req.session.adminId) { return
        res.render('jeux/jeuCreate')
        // } else {
        //     res.redirect('/')
        // }
    },

    postJeuItem: async (req, res) => {
        // const file = req.file,
        const dbJeuxModel = await JeuxModel.find({})

        JeuxModel.create(
            {
                ...req.body
            },
            
            ),
            res.redirect('/jeux')
    },


    //     if (file) {
    //         newJeu.image = {
    //             name: file.filename,
    //             originalName: file.originalname,
    //             path: file.path.replace('public', ''),
    //             createAt: Date.now()
    //         }

    //         newJeu.save(function (err) {
    //             if (!err) {
    //                 res.redirect('/')
    //             } else {
    //                 res.send(err)
    //             }
    //         })
    //     }

    // },

    putJeuItem: (req, res) => {
        jeuItem.updateOne(
            { _id: req.params.id },
            {
                title: req.body.title,
                description: req.body.description,
                author: req.body.author,
                price: req.body.price,
                image: req.body.image,
            },
            { multi: true },
            function (err) {
                if (!err) { res.redirect('/jeux')
                    res.send(err)
                }
            }
        )
    },

    deleteJeuSingle: (req, res) => {
    const query = { _id: req.params.id }
        JeuxModel.deleteOne(
            query,
            
             (err) => {
                if (!err) {
                    res.redirect('/jeux')
                } else {
                    res.send(err)
                }
            }
        )
       
    }

}