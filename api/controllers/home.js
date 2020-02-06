const actuCollection = require('../database/models/actuModel');

module.exports = {
    get: async(req, res) => {
        const dbActu = await actuCollection.find({})
        res.render('home', { dbActu })
    }
}