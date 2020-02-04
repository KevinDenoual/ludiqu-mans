const mongoose = require('mongoose');

const jeuSchema = new mongoose.schema ({

    title: String, 
    content: String,
    author: String,  
    image: String,
    createDate: {
        type: Date, 
        default: new Date ()
    }
})

const jeuModel = mongoose.model ('jeuModel', jeuSchema)

module.exports = jeuModel