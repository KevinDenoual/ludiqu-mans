const mongoose = require('mongoose')
// const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        // required: [true, ' le nom est obligatoire'],
    },
    age: Number,
    image: String,
    bio: String,
    createDate: {
        type: Date,
        default: new Date()
    },
    email: {
        type: String,
        // required: [true, "l'email est obligatoire"],
        unique: true,
    },
    password: {
        type: String,
        // required: [true, "le mot de passe est obligatoire"],
    },
    isVerified: Boolean,
    isModo: Boolean,
    isAdmin: Boolean,
    isBan: Boolean,
})

// userSchema.pre('save', ( next ) => {
//     const user = this
//     bcrypt.hash(user.password, 10, (error, encrypted) => {
//         user.password = encrypted
//         next()
//     })

// })




module.exports = mongoose.model('usercollection', userSchema)
