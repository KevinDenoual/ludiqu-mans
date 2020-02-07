const actuCollection = require('../database/models/actuModel')
const mkpmodel = require('../database/models/mkpModel')

module.exports = {
    get: async(req, res) => {
        const dbActu = await actuCollection.find({})
        const dbMkp = await mkpmodel.find({})
        res.render('home', { dbActu, dbMkp })
    }
}
