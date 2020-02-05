
const mongoose = require('mongoose');

const jeuSchema = new mongoose.Schema ({

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

const jeuModel = mongoose.model ('jeuModel', jeuSchema)

module.exports = jeuModel
