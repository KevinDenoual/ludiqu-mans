const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema ({

    email: String,
    sujet: String,
    message: String,

})

const ContactModel = mongoose.model('messageContact', ContactSchema)

module.exports = ContactModel