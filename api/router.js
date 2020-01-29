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
const actuSingle = require ('./controllers/actuSingle')
const jeux = require('./controllers/jeux')
const addJeux = require('./controllers/addJeux')

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

// Jeux 
router.route('/jeux')
    .get(jeux.get)

// AddJeux
router.route('/addJeux')
    .get(addJeux.get)
    
module.exports = router