const actuCollection = require('../database/models/actuModel');


module.exports = {
    getActu: async(req, res) => {
        const dbActu = await actuCollection.find({})
        // console.log(dbActu);
        
        res.render('actu/actus', { dbActu })
        // res.render('actu/actus')
    },

    getActuSingle: (req, res) => {
        res.render('actu/actuSingle')
    },

    getActuCreate: (req, res) => {
        res.render('actu/actuCreate')
    },

    postActuCreate: async(req, res) => {
        const dbActu = await actuCollection.find({})
        actuCollection.create(
            {
                title: req.body.title,
                content: req.body.content,
            },
            res.render('actu/actus', { dbActu })
        )
        // console.log(req.body)
        // res.redirect('/')
    },
}
