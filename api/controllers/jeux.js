// Import
const express = require('express');
const router = express.Router();
const path = require('path');
const JeuxModel = require('../database/models/JeuxModel');
const comentaryCollection = require('../database/models/comentaryModel');
const userModel = require('../database/models/userModel')



module.exports = {
    getJeux: async (req, res) => {
        const dbJeuModel = await JeuxModel.find(req.params.id)
        res.render('jeux/jeux', { dbJeuModel})
    },

    getJeuSingle: async (req, res) => {
        const dbJeuModel = await JeuxModel.findById(req.params.id)
        const dbComentary = await comentaryCollection.find({ articleId: req.params.id })
        const dbuser = await userModel.findById(req.params.id)
        // console.log(req.params.id);

        res.render('jeux/jeuSingle', { dbJeuModel, dbComentary , dbuser })
    },

    getJeuCreate: (req, res) => {

        // if (req.session.adminId) { return
        res.render('jeux/jeuCreate')
        // } else {
        //     res.redirect('/')
        // }
    },

    postJeuItem: async (req, res) => {
        // const file = req.file
        const dbJeuxModel = await JeuxModel.find({})

        JeuxModel.create(
            {
                ...req.body,
                image: `/assets/ressources/images/${req.file.filename}`
            },

        ),

            res.redirect('/jeux')

    },


        // if (file) {
        //     newJeu.image = {
        //         name: file.filename,
        //         originalName: file.originalname,
        //         path: file.path.replace('public', ''),
        //         createAt: Date.now()
        //     }

        //     newJeu.save(function (err) {
        //         if (!err) {
        //             res.redirect('/')
        //         } else {
        //             res.send(err)
        //         }
        //     })
        // },

    

    putJeuSingle: async (req, res) => {
        const dbJeuModel = await JeuxModel.findById(req.params._id)
        let query = { _id: req.params.id }

        JeuxModel.findOneAndUpdate(
            query,
            {
                title: req.body.title,
                content: req.body.content,
                author: req.body.author,
                price: req.body.price,
                image: `/assets/ressources/images/${req.file.filename}`
            },

            (err) => {
                if (!err) {
                    res.redirect('/jeux')
                } else {
                    res.rend(err)
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

    },

    postComment: (req, res) => {
        comentaryCollection.create(
            {
                content: req.body.content,
                typeArticle : "Jeu",
                author: req.session.name,
                authorId: req.session.userId,
                articleId: req.params.id
            },
            (err) => {
                if (!err) {
                    // res.redirect('/actuSingle/' + req.params.id)
                    res.redirect('back')
                    // 'back' permet de revenir à la page précédente
                } else {
                    res.send(err)
                }
            })
        // console.log(req.body)
        // console.log(req.params.id)

    },

    deleteOneComment: (req, res) => {
        comentaryCollection.deleteOne(
            { _id: req.params.id },
            (err) => {
                if (!err) {
                    res.redirect('back')
                } else {
                    res.send(err)
                }
                // console.log(req.params.id);

            })
    }

}