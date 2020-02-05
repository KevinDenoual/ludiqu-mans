const actuModel = require('../database/models/actuModel');


module.exports = {
    getActu: (req, res) => {
        res.render('actu/actus')
    },
    getActuCreate: (req, res) => {
        res.render('actu/actuCreate')
    },
    getActuSingle: (req, res) => {
        res.render('actu/actuSingle')
    },

    postActuCreate: (req, res) => {
        actuModel.create(
            {
                title: req.body.title,
                content: req.body.content,
            },
            res.redirect('/')
        )
        console.log(req.body.title)
        // res.redirect('/')
    },
}
