const mongoose = require('mongoose');

const actuSchema = new mongoose.Schema({

    title : String,
    image : String,
    content : String,
    comment : String,
    createDate : {
        type: Date,
        default : new Date()
    },
    author : String,
    // sera le pseudo de la personne qui créé l'actu
    isVerified : {
        type : Boolean,
        default : true
    },

})

const actuCollection = mongoose.model('actucollection', actuSchema)

module.exports = actuCollection
