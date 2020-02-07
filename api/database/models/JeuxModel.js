
const mongoose = require('mongoose');

const JeuxModelSchema = new mongoose.Schema ({

    title: String, 
    content: String,
    author: String,
    price: Number, 
    image: String,
    createDate: {
        type: Date, 
        default: new Date ()
    }
})

const JeuxModel = mongoose.model('JeuxModel', JeuxModelSchema)

module.exports = JeuxModel
