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

    postActuCreate: (req, res) => {
        actuCollection.create(
            {
                title: req.body.title,
                content: req.body.content,
            },
            (err) => {
                if (!err) {
                    res.redirect('/actus')
                } else {
                    res.send(err)
                }
            })
        // console.log(req.body)
    },

    deleteOneActuSingle: (req, res) => {
        // console.log('delete Article')
        actuCollection.deleteOne(
            { _id: req.params.id },
            (err) => {
                if (!err) {
                    res.redirect('/actus')
                } else {
                    res.send(err)
                }
            })
    },

    putActuSingle: (req, res) => {
        actuCollection.findOneAndUpdate(
            { _id: req.params.id },
            {
                title: req.body.title,
                content: req.body.content,
                createDate: req.body.date,
            },
            { multi: true },
            (err) => {
                if (!err) {
                    // console.log('UPDATE OK');
                    res.redirect('/actuSingle/' + req.params.id)
                } else {
                    res.send(err)
                }
            })
    },
}