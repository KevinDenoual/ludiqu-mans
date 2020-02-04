module.exports = {
    getJeux: (req, res) => {
        res.render('jeux/jeux')
    },

    getJeuSingle: (req, res) => {
        res.render('jeux/jeuSingle')
    },

    getJeuCreate: (req, res) => {

        if(req.session.adminId) {
            return res.render('jeux/jeuCreate')
        } else {
            res.redirect('/')
        }       
    },

    putJeuModel: (req, res) => {
        jeuModel.updateOne(
            {_id: req.params.id },
            {
                title: req.body.title, 
                content: req.body.content,
                author: req.body.author,
                image: req.body.image,
            },
            {multi: true},
            function (err) {
                if(!err) {
                    res.redirect('/')
                } else {
                    res.send(err)
                }
            }
        )
    },

    


}