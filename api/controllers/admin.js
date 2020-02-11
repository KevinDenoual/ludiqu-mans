const comentaryCollection = require('../database/models/comentaryModel');


module.exports = {
    get: (req, res) => {
        res.render('admin/admin')
    },

    getComentaryList: async (req, res) => {
        const dbComentaryActu = await comentaryCollection.find({})

        res.render('admin/comentaryList', { dbComentaryActu })
    },

    deleteOneComentaryList: (req, res) => {
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
    },

    putComentSingle: (req, res) => {
        // comentaryCollection.findById(
        //     { _id: req.params.id },
        //     {
        //         title: req.body.title,
        //         content: req.body.content,
        //         createDate: req.body.date,
        //     },
        //     { multi: true },
        //     (err) => {
        //         if (!err) {
        //             // console.log('UPDATE OK');
        //             res.redirect('/actuSingle/' + req.params.id)
        //         } else {
        //             res.send(err)
        //         }
        //     })

        res.render('admin/admin')
    }
}