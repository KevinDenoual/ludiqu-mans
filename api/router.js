/************
 * Router.js*
 ************/

// Import
const express = require('express')
const router = express.Router()


// Import de controllers
const home = require('./controllers/home')
const signup = require('./controllers/signup')
const marketplace = require('./controllers/marketplace/marketplace')
const wandw = require('./controllers/wandw')
const actus = require('./controllers/actu/actus')
// const actuSingle = require ('./controllers/actu/actuSingle')
// const actuCreate = require ('./controllers/actu/actuCreate')
const contact = require ('./controllers/contact')
const jeux = require('./controllers/jeux')
const addJeux = require('./controllers/addJeux')
const jeuSingle = require('./controllers/jeuSingle')
const marketplaceCreate     = require('./controllers/marketplace/marketplaceCreate')
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
    .get(actus.getActu)

// actuSingle
router.route('/actuSingle')
    .get(actus.getActuSingle)

// actuCreate
router.route('/actuCreate')
    .get(actus.getActuCreate)

// contact
router.route('/contact')
    .get(contact.get)
// Jeux 
router.route('/jeux')
    .get(jeux.get)

// AddJeux
router.route('/addJeux')
    .get(addJeux.get)

// jeuSingle
router.route('/jeuSingle')
    .get(jeuSingle.get)
    
//adminpage
router.route('/admin')
    .get(admin.get)



module.exports = router