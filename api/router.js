/************
 * Router.js*
 ************/

// Import
const express = require('express')
const router = express.Router()


// Import de controllers
const home                  = require('./controllers/home')
const signup                = require('./controllers/signup')
const marketplace           = require('./controllers/marketplace')
const marketplaceCreate     = require('./controllers/marketplaceCreate')
const wandw                 = require('./controllers/wandw')
const actus                 = require('./controllers/actus')
const actuSingle            = require ('./controllers/actuSingle')
const admin                 = require ('./controllers/admin')

// Home
router.route('/')
    .get(home.get)

// Signup
router.route('/signup')
    .get(signup.get)

// marketplace
router.route('/marketplace')
    .get(marketplace.get)

// marketplace
router.route('/marketplaceCreate')
    .get(marketplaceCreate.get)

// wandw
router.route('/wandw')
    .get(wandw.get)

// actus
router.route('/actus')
    .get(actus.get)

// actuSingle
router.route('/actuSingle')
    .get(actuSingle.get)

//adminpage
router.route('/admin')
    .get(admin.get)



module.exports = router