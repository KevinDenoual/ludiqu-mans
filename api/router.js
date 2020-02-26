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
const mkplist = require('./controllers/mkplist')
const verifMail = require('./controllers/verifMail')

// Import middleware
const auth = require('../middleware/auth')
const redirectAuthSucces = require('../middleware/redirectAuthSucces')
const isVerified = require('../middleware/isVerified')
const isAdmin = require('../middleware/isAdmin')
const isModo = require('../middleware/isModo')

// Multer
const multer = require("multer");

const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
};

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './public/ressources/images')
    },
    filename: (req, file, callback) => {
        const name = file.originalname.split(' ').join('_');
        const extension = MIME_TYPES[file.mimetype];
        callback(null, name + Date.now() + '.' + extension);
    }
});

const upload = multer({ storage: storage });

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
    .put(isVerified, mkp.putmkp)

// mkpCreate
router.route('/mkpCreate')
    .get(isVerified, mkp.getmkpCreate)
    .post(isVerified, upload.single('image'), mkp.postmkpCreate)


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
    .put(isModo, upload.single('image'), actus.putActuSingle)

// actuCreate
router.route('/actuCreate')
    .get(isAdmin, actus.getActuCreate)
    .post(isAdmin, upload.single('image'), actus.postActuCreate)

// commentaireActu
router.route('/commentaireActu/:id')
    .post(isVerified, actus.postComment)
    .delete(isAdmin, actus.deleteOneComment)

//********* CONTACT ***********//
// contactouter.js:158:6
router.route('/contact')
    .get(contact.getContact)
// Jeux 
router.route('/jeux')
    .get(jeux.getJeux)

// JeuCreate
router.route('/jeuCreate')
    .get(isAdmin, jeux.getJeuCreate)
    .post(isAdmin, upload.single('image'), jeux.postJeuItem)

// jeuSingle
router.route('/jeuSingle/:id')
    .get(jeux.getJeuSingle)
    .delete(isAdmin, jeux.deleteJeuSingle)
    .put(isModo, upload.single('image'), jeux.putJeuSingle)

// commentaireJeu
router.route('/commentaireJeu/:id')
    .post(isVerified, jeux.postComment)
    .delete(isModo, jeux.deleteOneComment)

//********* ADMIN ***********//
//adminpage
router.route('/admin')
    .get(isAdmin, admin.get)

//mkplist
router.route('/mkplist')
    .get(isAdmin, mkplist.getmkplist)

//mkplist/:id
router.route('/mkplist/:id')
    .put(isAdmin, mkplist.putmkplist)

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
// Nodemailer verif 
router.route('/verify/:id')
    .get(signup.verifMail)
// verifMail
router.route('/verifMail')
    .get(verifMail.get)

// Authentification 
router.route('/authentification')
    .post(authentification.postLogin)

// Logout
router.route('/logout')
    .get(auth, logout.getLogout)




module.exports = router
