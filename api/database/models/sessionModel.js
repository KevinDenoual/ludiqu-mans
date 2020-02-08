const mongoose = require('mongoose');


const sessionSchema = new mongoose.Schema ({

    name: String,

    email: {
        type: String,
    }

})

module.export = mongoose.sessionModel('session', sessionSchema)