module.exports = {
    getActu: (req, res) => {
        res.render('actus')
    },
    getActuCreate: (req, res) => {
        res.render('actuCreate')
    },
    getActuSingle: (req, res) => {
        res.render('actuSingle')
    }
}