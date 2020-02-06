const actuCollection = require('../database/models/actuModel');

module.exports = {
    getActu: async (req, res) => {
        const dbActu = await actuCollection.find({})
        // console.log(dbActu);

        res.render('actu/actus', { dbActu })
    },

    getActuSingle: async (req, res) => {
        const dbActu = await actuCollection.findById(req.params.id)
        // console.log(req.params.id);

        res.render('actu/actuSingle', { dbActu })
    },

    getActuCreate: (req, res) => {
        res.render('actu/actuCreate')
    },

    postActuCreate: async (req, res) => {
        actuCollection.create(
            {
                title: req.body.title,
                content: req.body.content,
            },
        )
        // console.log(req.body)
        res.redirect('/actus')
    },

    deleteOneActuSingle: async (req, res, next) => {
        // console.log('delete Article')
        actuCollection.deleteOne(
            {_id: req.params.id},
            (err) => {
                if (!err) {
                    res.redirect('/actus')
                } else {
                    res.send(err)
                }
            })
    }
}
