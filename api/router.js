/************
 * Router.js*
 ************/

// Import
const express = require('express')
const router = express.Router()


// Import de controllers
const home = require('./controllers/home')
const signup = require('./controllers/signup')
const marketplace = require('./controllers/marketplace')
const wandw = require('./controllers/wandw')
const actus = require('./controllers/actus')
const contact = require ('./controllers/contact')
const jeux = require('./controllers/jeux')
const admin = require ('./controllers/admin')


// Home
router.route('/')
    .get(home.get)

// Signup
router.route('/signup')
    .get(signup.get)


//********* MARKETPLACE ***********//
// marketplace
router.route('/marketplace')
    .get(marketplace.getMarketPlace)

// marketplaceCreate
router.route('/marketplaceCreate')
    .get(marketplace.getMarketPlaceCreate)


//********* OU ET QUAND ***********//
// wandw
router.route('/wandw')
    .get(wandw.get)


//********* ACTU ***********//
// actus
router.route('/actus')
    .get(actus.getActu)

// actuSingle
router.route('/actuSingle')
    .get(actus.getActuSingle)

// actuCreate
router.route('/actuCreate')
    .get(actus.getActuCreate)


//********* CONTACT ***********//
// contact
router.route('/contact')
    .get(contact.get)


//********* JEUX ***********//
// Jeux 
router.route('/jeux')
    .get(jeux.getJeux)

// JeuCreate
router.route('/jeuCreate')
    .get(jeux.getJeuCreate)
    .post(jeux.postJeuItem)

// jeuSingle
router.route('/jeuSingle/:id')
    .get(jeux.getJeuSingle)


    

//********* ADMIN ***********//
//adminpage
router.route('/admin')
    .get(admin.get)



module.exports = router
