module.exports = {
    getJeux: (req, res) => {
        res.render('jeux/jeux')
    },
    getJeuSingle: (req, res) => {
        res.render('jeux/jeuSingle')
    },
    getJeuCreate: (req, res) => {
        res.render('jeux/jeuCreate')
    }
}