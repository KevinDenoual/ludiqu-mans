const mongoose = require('mongoose')

const marcketplaceSchema = new mongoose.Schema({

    title : String,
    content : String,
    Seller: String,
    image: String,
    price: Number,
    createDate : {
        type: Date,
        default : new Date()
    },
    isSignal: Boolean,
    interessed: Boolean,
})

const mkpmodel = mongoose.model('mkpmodel', marcketplaceSchema)

module.exports = mkpmodel