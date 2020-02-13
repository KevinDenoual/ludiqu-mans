/************
 * Router.js*
 ************/

// Import
const express = require('express')
const router = express.Router()

// Import de controllers
const home = require('./controllers/home')
const signup = require('./controllers/signup')
const mkp = require('./controllers/mkp')
const wandw = require('./controllers/wandw')
const actus = require('./controllers/actus')
const contact = require ('./controllers/contact')
const jeux = require('./controllers/jeux')
const admin = require ('./controllers/admin')
const authentification = require('./controllers/auth/authentification')
const logout = require('./controllers/auth/logout')
const listUser = require('./controllers/listUser')
const ticketAdmin = require('./controllers/ticketAdmin')

// Import middleware
const auth = require('../middleware/auth')
const redirectAuthSucces = require('../middleware/redirectAuthSucces')
const isVerified = require('../middleware/isVerified')
const isAdmin = require('../middleware/isAdmin')
const isModo = require('../middleware/isModo')




// Home
router.route('/')
    .get(home.get)
    .post(home.postLogin)


//********* MKP ***********//
// mkp
router.route('/mkp')
    .get(mkp.getmkp)

//mkp/:id(for delete)
router.route('/mkp/:id')
    .delete(mkp.deletemkp)

// mkpCreate
router.route('/mkpCreate')
    .get(mkp.getmkpCreate)
    .post(mkp.postmkpCreate)


//********* OU ET QUAND ***********//
// wandw
router.route('/wandw')
    .get(wandw.get)


//********* ACTU ***********//
// actus
router.route('/actus')
    .get(actus.getActu)

// actuSingle
router.route('/actuSingle/:id')
    .get(actus.getActuSingle)
    .delete(actus.deleteOneActuSingle)
    .put(actus.putActuSingle)

// actuCreate
router.route('/actuCreate')
    .get(actus.getActuCreate)
    .post(actus.postActuCreate)

// commentaireActu
router.route('/commentaireActu/:id')
    .post(actus.postComment)
    .delete(actus.deleteOneComment)

//********* CONTACT ***********//
// contact
router.route('/contact')
    .get(contact.getContact)
    .post(contact.postContact)


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
    .delete(jeux.deleteJeuSingle)
    .put(jeux.putJeuSingle)

// // commentaireJeu
router.route('/commentaireJeu/:id')
    .post(jeux.postComment)
    .delete(jeux.deleteOneComment)

//********* ADMIN ***********//
//adminpage
router.route('/admin')
    .get(admin.get)
    
//listuser
router.route('/listUser')
    .get(listUser.getlistUser)

    //listUser/:id
router.route('/listUser/:id')
    .put(listUser.putlistUser)
    .delete(listUser.deleteOnelistUser)


//********* Signup ***********//
// Signup ( CreateUser )
router.route('/signup')
    .get(signup.get)
    .post(signup.postSignup)
    
// Authentification 
router.route('/authentification')
    .post(authentification.postLogin)

// Logout
router.route('/logout')
    .get(logout.getLogout)

module.exports = router
