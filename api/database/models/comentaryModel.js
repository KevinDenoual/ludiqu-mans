const mongoose = require('mongoose');

const comentarySchema = new mongoose.Schema({
    note : String,
    content : String,
    createDate : {
        type: Date,
        default : new Date()
    },
    typeArticle : String,
    author : String,
    authorId : String,
    isValided : {
        type : Boolean,
        default : false
    },
    articleId : String,
})

const comentaryCollection = mongoose.model('comentarycollection', comentarySchema)

module.exports = comentaryCollection
