// Import Module
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fileupload = require('express-fileupload');
const expressSession = require('express-session');
const MongoStore = require('connect-mongo');
const connectFlash = require('connect-flash');
const Handlebars = require("handlebars");
const path = require('path');



const app = express()
const port = process.env.PORT || 3000
const urlDB = "mongodb://localhost:27017/ludiqumans"
const mongoStore = MongoStore(expressSession);


app.use(express.static('public'));
app.use(connectFlash())
app.use(fileupload())


// app.use('*', (req, res, next) => {
//     res.locals.user = req.session.userId;
//     next()
// })


// Helpers
// **************limitEach***********
Handlebars.registerHelper('limitEach', function (arr, limitEach) {
    if (!Array.isArray(arr)) { return []; }
    return arr.slice(-limitEach).reverse();
});
// **************reverse***********
Handlebars.registerHelper('reverse', function (arr, reverse) {
    if (!Array.isArray(arr)) { return []; }
    return arr.reverse();
});


// Body Parser (PENSER à le mettre avant "app.use("/", router)" sinon il ne prend pas le "req.body")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


// Express Session
app.use(expressSession({
    secret: 'securite',
    name: 'cookie',
    saveUninitialized: true,
    resave: false,

    store: new mongoStore(
        { mongooseConnection: mongoose.connection }
    )
}));

// Mongoose
mongoose.connect(urlDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


// Handlebars
var handlebars = require('handlebars')
app.engine('hbs', exphbs({
    extname: 'hbs',
    defaultLayout: 'main'
}));
app.set('view engine', 'hbs');


// Router (PENSER à mettre à la fin dans l'architecture)
const router = require('./api/router')
app.use("/", router)


// Error404
app.use((req, res) => {
    res.render('error404')
})


// Port
app.listen(port, function () {
    console.log("Le serveur tourne sur le port : " + port);
})