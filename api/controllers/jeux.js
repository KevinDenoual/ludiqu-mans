module.exports = {
    getJeux: (req, res) => {
        res.render('jeux')
    },
    getJeuSingle: (req, res) => {
        res.render('jeuSingle')
    },
    getJeuCreate: (req, res) => {
        res.render('jeuCreate')
    }
}