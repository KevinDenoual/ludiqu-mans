const comentaryCollection = require('../database/models/comentaryModel');
const userModel = require('../database/models/userModel')
const mkpmodel = require('../database/models/mkpModel')
const ContactModel = require('../database/models/contactModel')


module.exports = {
    get: async (req, res) => {
        const dbuser = await userModel.find({})
        const dbComentary = await comentaryCollection.find({})
        const dbMkp = await mkpmodel.find({})
        const dbMessage = await ContactModel.find({})
        res.render('admin/admin', {dbuser, dbComentary, dbMkp, dbMessage})
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
                isValided: true,
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