const comentaryCollection = require('../database/models/comentaryModel');


module.exports = {
    get: (req, res) => {
        res.render('admin/admin')
    },

    getComentaryList: async (req, res) => {
        const dbComentaryActu = await comentaryCollection.find({})

        res.render('admin/comentaryList', { dbComentaryActu })
    }
}