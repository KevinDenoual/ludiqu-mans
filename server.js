// Import Module
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fileupload = require('express-fileupload');
const expressSession = require('express-session');
const MongoStore = require('connect-mongo');
const connectFlash = require('connect-flash');
const path = require('path');
const methodOverride = require('method-override');
const Handlebars = require("handlebars");
const MomentHandler = require("handlebars.moment");
MomentHandler.registerHelpers(Handlebars);


const app = express()
const port = process.env.PORT || 4000
// const urlDB = "mongodb://localhost:27017/ludiqumans"
const urlDB = "mongodb+srv://lucie:83Tde3k6mIOH4piD@cluster0-9bswz.mongodb.net/test?retryWrites=true&w=majority"
const mongoStore = MongoStore(expressSession);

// Method-Override
app.use(methodOverride('_method'));

// Body Parser 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('public'));
app.use(connectFlash());
app.use(fileupload());

//connect flash
app.use(connectFlash())



// Helpers
// **************limitEach***********
Handlebars.registerHelper('limitEach', function (arr, limitEach) {
    if (!Array.isArray(arr)) { return []; }
    return arr.slice(-limitEach).reverse();
});
// **************reverse***********
Handlebars.registerHelper('reverse', function (arr) {
    if (!Array.isArray(arr)) { return []; }
    return arr.reverse();
});
// **************tri typeArticle Commentaires**********
Handlebars.registerHelper('typeArticle', function (type) {
    if (this.typeArticle == type) {
        return this;
    }
});
// **************limitation taille texte cards**********
Handlebars.registerHelper('truncate', function (str, len) {
    if (str != null && str.length > len && str.length > 0) {
        return new Handlebars.SafeString(str.substring(0, len) + '...');
    }
    return str;

});
// **************limitation taille texte cards sans couper le mot**********
// Handlebars.registerHelper('truncate', function (str, len) {
//     if (str.length > len && str.length > 0) {
//         var new_str = str + " ";
//         new_str = str.substr(0, len);
//         new_str = str.substr(0, new_str.lastIndexOf(" "));
//         new_str = (new_str.length > 0) ? new_str : str.substr(0, len);

//         return new Handlebars.SafeString(new_str + '...');
//     }
//     return str;
// });



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

app.use('*', (req, res, next) => {
    res.locals.id = req.session.userId
    res.locals.user = req.session.status
    res.locals.name = req.session.name
    if (req.session.isAdmin === true) {
        res.locals.isVerified = true
        res.locals.isModo = true
        res.locals.isAdmin = true
    } else if (req.session.isModo === true) {
        res.locals.isVerified = true
        res.locals.isModo = true
    } else if (req.session.isVerified === true) {
        res.locals.isVerified = true
    } else if (req.session.isBan === true) {
        req.locals.isBan = true
    }
    // console.log(res.locals);

    next()
})

// Mongoose
mongoose.connect(urlDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

// Handlebars
var handlebars = require('handlebars')
app.engine('hbs', exphbs({
    extname: 'hbs',
    defaultLayout: 'main'
}));
app.set('view engine', 'hbs');


// Router
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
