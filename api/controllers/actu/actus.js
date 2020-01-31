module.exports = {
    getActu: (req, res) => {
        res.render('actu/actus')
    },
    getActuCreate: (req, res) => {
        res.render('actu/actuCreate')
    },
    getActuSingle: (req, res) => {
        res.render('actu/actuSingle')
    }
}