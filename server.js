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
const port = process.env.PORT || 3000
// const urlDB = "mongodb://localhost:27017/ludiqumans"
const urlDB = "mongodb+srv://willy:Ghj4vGKhdNp42pgN@cluster0-9bswz.mongodb.net/test?retryWrites=true&w=majority"
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
    res.locals.user = req.session.status
    if(req.session.isAdmin === true){
        res.locals.isVerified = true
        res.locals.isModo = true
        res.locals.isAdmin = true
    }else if(req.session.isModo === true){
        res.locals.isVerified = true
        res.locals.isModo = true
    }else if(req.session.isVerified === true){
        res.locals.isVerified = true
    }else if (req.session.isBan === true){
        req.locals.isBan = true
    }
    // console.log(res.locals);
    
    next()
})

// Mongoose
mongoose.connect(urlDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify : false,
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