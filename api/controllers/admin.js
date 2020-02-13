const comentaryCollection = require('../database/models/comentaryModel');


module.exports = {
    get: (req, res) => {
        res.render('admin/admin')
    },

    getComentaryList: async (req, res) => {
        const dbComentary = await comentaryCollection.find({})

        res.render('admin/comentaryList', { dbComentary })
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
        comentaryCollection.findOneAndUpdate(
            { _id: req.params.id },
            {
                isVerified : true,
            },
            (err) => {
                if (!err) {
                    // console.log('UPDATE OK');
                    res.redirect('/comentaryList')
                } else {
                    res.send(err)
                }
            })

        // console.log(req.params.id);
        
        // res.render('admin/admin')
    }
}