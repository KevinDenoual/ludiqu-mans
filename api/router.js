/*
 * Router.js
 ***********/
// Import
const express = require('express')
const router = express.Router()


// Import de controllers
const home = require('./controllers/home')
const signup = require('./controllers/signup')
const marketplace = require('./controllers/marketplace')
const wandw = require('./controllers/wandw')
const actus = require('./controllers/actus')

// Home
router.route('/')
    .get(home.get)

// Signup
router.route('/signup')
    .get(signup.get)

// marketplace
router.route('/marketplace')
    .get(marketplace.get)

// wandw
router.route('/wandw')
    .get(wandw.get)

// dernieresActus
router.route('/actus')
    .get(actus.get)

module.exports = router