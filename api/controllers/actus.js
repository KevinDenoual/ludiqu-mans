const express = require('express');
const actuCollection = require('../database/models/actuModel');
const comentaryCollection = require('../database/models/comentaryModel');
const userModel = require('../database/models/userModel')
const path = require('path');



module.exports = {
    getActu: async (req, res) => {
        const dbActu = await actuCollection.find({})
        // console.log(dbActu);        
        res.render('actu/actus', { dbActu })
    },

    getActuSingle: async (req, res) => {
        const dbActu = await actuCollection.findById(req.params.id)
        const dbComentary = await comentaryCollection.find({ articleId: req.params.id })
        const dbuser = await userModel.findById(req.params.id)
        // console.log(req.params.id);
        res.render('actu/actuSingle', { dbActu, dbComentary, dbuser })
    },

    getActuCreate: async (req, res) => {
        const dbuser = await userModel.findById(req.params.id)
        res.render('actu/actuCreate', { dbuser })
    },

    postActuCreate: (req, res) => {
        console.log(req.file);
        
        actuCollection.create(
            {
                title: req.body.title,
                content: req.body.content,
                author: req.session.name,
                image: `/assets/ressources/images/${req.file.filename}`
            },
            (err) => {
                if (!err) {
                    res.redirect('/actus')
                } else {
                    res.send(err)
                }
            })
        console.log(req.body)
    },

    deleteOneActuSingle: async (req, res, next) => {
        const dbComentary = await comentaryCollection.find({ articleId: req.params.id })
        // console.log('delete Article')
        // console.log(dbComentary);
        comentaryCollection.deleteMany(
            { dbComentary } ,
            (err) => {
                if (!err) {
                    actuCollection.deleteOne(
                        { _id: req.params.id },
                        (err) => {
                            if (!err) {
                                res.redirect('/actus')
                            } else {
                                res.send(err)
                            }
                        }
                    )
                } else {
                    res.send(err)
                }
            }
        )
    },

    putActuSingle: (req, res) => {
        actuCollection.findOneAndUpdate(
            { _id: req.params.id },
            {
                title: req.body.title,
                content: req.body.content,
                createDate: req.body.date,
            },
            { multi: true },
            (err) => {
                if (!err) {
                    // console.log('UPDATE OK');
                    res.redirect('/actuSingle/' + req.params.id)
                } else {
                    res.send(err)
                }
            })
    },

    postComment: (req, res) => {
        comentaryCollection.create(
            {
                content: req.body.content,
                typeArticle: "Actu",
                author: req.session.name,
                authorId: req.session.userId,
                articleId: req.params.id,
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
            })
    }
}
