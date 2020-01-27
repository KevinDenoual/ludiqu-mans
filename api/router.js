/*
 * Router.js
 ***********/
// Import
const express = require('express')
const router = express.Router()


// Import de controllers
const home = require('./controllers/home')
const signup = require('./controllers/signup')

// Home
router.route('/')
    .get(home.get)

// Signup
router.route('/signup')
    .get(signup.get)

module.exports = router