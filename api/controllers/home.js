const mkpmodel = require('../database/models/mkpmodel')

module.exports = {
    get: async(req, res) => {
        const dbMkp = await mkpmodel.find({})
        res.render('home', {dbMkp})
    }
}