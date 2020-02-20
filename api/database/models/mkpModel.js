const mongoose = require('mongoose')

const mkpModelSchema = new mongoose.Schema({

    title : String,
    content : String,
    seller: String,
    image: String,
    price: Number,
    createDate : {
        type: Date,
        default : new Date()
    },
    isSignal: {
        type : Boolean,
        default: false
    },
    interessed: Boolean,
})



module.exports =  mongoose.model('mkpcollection', mkpModelSchema)
