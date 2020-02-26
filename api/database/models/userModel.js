const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: 'user'
    },
    isVerified:{
        type: Boolean,
        default: false
    },
    isModo: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    isBan: {
        type: Boolean,
        default: false,
    },
    imgUser: {
        type: String,
        default: "https://i.stack.imgur.com/34AD2.jpg"
    }
})

userSchema.pre('save', function ( next ) {
    const user = this
    bcrypt.hash(user.password, 10, (err, encrypted) => {
        user.password = encrypted
        next()
    })

})




module.exports = mongoose.model('usercollection', userSchema)
