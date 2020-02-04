module.exports = {
    getMarketPlace: (req, res) => {
        res.render('marketplace/marketplace')
    }, 
    getMarketPlaceCreate: (req, res) => {
        res.render('marketplace/marketplaceCreate')
    }
}