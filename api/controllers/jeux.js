const path = require('path')
const post = require('../database/models/jeuModel')

module.exports = {
    getJeux: (req, res) => {
        res.render('jeux/jeux')
    },

    getJeuSingle: async (req, res) => {
        const jeuSingle = await post.findById(req.params.id)
        res.render('jeux', { jeuSingle })
    },

    getJeuCreate: (req, res) => {

        if(req.session.adminId) {
            return res.render('jeux/jeuCreate')
        } else {
            res.redirect('/')
        }

        post(upload.single("image"),(req, res) => {
            const file = req.file;
            const newJeu = new jeuModel( {
                title: req.body.title,
                description: req.body.description,
                author: req.body.author,
                price: req.body.price,
            })
        });
        
        if(file) {
            newJeu.image = {
                name: file.filename,
                originalName: file.originalname,
                path: file.path.replace('public', ''),
                createAt: Date.now()
            }
        }

        newJeu.save(function(err) {
            if(!err) {
                res.redirect('/')
            } else {
                res.send(err)
            }
        })
    },

    putJeuModel: (req, res) => {
        jeuModel.updateOne(
            {_id: req.params.id },
            {
                title: req.body.title, 
                description: req.body.description,
                author: req.body.author,
                price: req.body.price,
                image: req.body.image,
            },
            {multi: true},
            function (err) {
                if(!err) {
                    res.redirect('/')
                } else {
                    res.send(err)
                }
            }
        )
    },

    deleteJeuSingle: (req, res) => {
        jeuModel.deleteOne(
            {_id: req.params.id},
            function(err) {
                if(!err) {
                    res.redirect('/')
                } else {
                    res.send(err)
                }
            }
        )
    }

}