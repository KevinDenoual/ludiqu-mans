// installer mongoDb (la BDD): https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/ et doc word 
// installer robo3t (interface graphique pour utiliser mongoDb) : https://www.techrunnr.com/install-robomongo-robo-3t-on-ubuntu-18-04/ et doc word
// installer mongoose (pour permettre à nodeJs de communiquer avec mongoDb) : sur le terminal de commande de VSC : « npm i --save mongoose » 
// démarrer mongo sur un terminal à part : "sudo systemctl start mongod" puis "mongod" et ouvrir "robo3t" (ou pour utiliser mongodb en ligne de commande : sur un autre terminal : « sudo mongo »))

const mongoose = require('mongoose');

const actuSchema = new mongoose.Schema({

    title : String,
    image : String,
    content : String,
    comment : String,
    createDate : {
        type: Date,
        default : new Date(),
    },
    author : String,
    // sera le pseudo de la personne qui créé l'actu
    isVerified : {
        type : Boolean,
        default : true,
    },

})

const actuModel = mongoose.model('actuModel', actuSchema)

module.exports = actuModel
