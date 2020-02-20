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
const contact = require('./controllers/contact')
const jeux = require('./controllers/jeux')
const admin = require('./controllers/admin')
const authentification = require('./controllers/auth/authentification')
const logout = require('./controllers/auth/logout')
const listUser = require('./controllers/listUser')
const ticketAdmin = require('./controllers/ticketAdmin')
const myAccount = require('./controllers/myAccount')

// Import middleware
const auth = require('../middleware/auth')
const redirectAuthSucces = require('../middleware/redirectAuthSucces')
const isVerified = require('../middleware/isVerified')
const isAdmin = require('../middleware/isAdmin')
const isModo = require('../middleware/isModo')



/******** PAGE ACCUEIL **********/
// Home
router.route('/')
    .get(home.get)


//********* MKP ***********//
// mkp
router.route('/mkp')
    .get(mkp.getmkp)

//mkp/:id (for delete)
router.route('/mkp/:id')
    .delete(isModo, mkp.deletemkp)

// mkpCreate
router.route('/mkpCreate')
    .get(isVerified, mkp.getmkpCreate)
    .post(isVerified, mkp.postmkpCreate)


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
    .delete(isAdmin, actus.deleteOneActuSingle)
    .put(isModo, actus.putActuSingle)

// actuCreate
router.route('/actuCreate')
    .get(isAdmin, actus.getActuCreate)
    .post(isAdmin, actus.postActuCreate)

// commentaireActu
router.route('/commentaireActu/:id')
    .post(isVerified, actus.postComment)
    .delete(isAdmin, actus.deleteOneComment)

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
    .get(isAdmin, jeux.getJeuCreate)
    .post(isAdmin, jeux.postJeuItem)

// jeuSingle
router.route('/jeuSingle/:id')
    .get(jeux.getJeuSingle)
    .delete(isAdmin, jeux.deleteJeuSingle)
    .put(isModo, jeux.putJeuSingle)

// commentaireJeu
router.route('/commentaireJeu/:id')
    .post(isVerified, jeux.postComment)
    .delete(isModo, jeux.deleteOneComment)

//********* ADMIN ***********//
//adminpage
router.route('/admin')
    .get(isAdmin, admin.get)

//listuser
router.route('/listUser')
    .get(isAdmin, listUser.getlistUser)

//listUser/:id
router.route('/listUser/:id')
    .put(isAdmin, listUser.putlistUser)
    .delete(isAdmin, listUser.deleteOnelistUser)

router.route('/myAccount/:id')
    .get(auth, myAccount.getMyAccount)
    .put(auth, myAccount.putMyAccount)
    
// Gestion Commentaires
router.route('/comentaryList')
    .get(isAdmin, admin.getComentaryList)

router.route('/comentaryList/:id')
    .delete(isModo, admin.deleteOneComentaryList)
    .put(isModo, admin.putComentSingle)

// TicketAdmin
router.route('/ticketAdmin')
    .get(isAdmin, ticketAdmin.getTicketAdmin)
router.route('/ticketAdmin/:id')
    .delete(isAdmin, ticketAdmin.deleteTicketAdmin)

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
    .get(auth, logout.getLogout)

module.exports = router
