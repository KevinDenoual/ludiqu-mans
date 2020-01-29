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
const actus = require('./controllers/actu/actus')
const actuSingle = require ('./controllers/actu/actuSingle')
const actuCreate = require ('./controllers/actu/actuCreate')
const contact = require ('./controllers/contact')

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

// actus
router.route('/actus')
    .get(actus.get)

// actuSingle
router.route('/actuSingle')
    .get(actuSingle.get)

// actuCreate
router.route('/actuCreate')
    .get(actuCreate.get)

// contact
router.route('/contact')
    .get(contact.get)

module.exports = router