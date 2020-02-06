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
const moment = require('moment')
const Handlebars = require("handlebars")
const methodOverride = require('method-override')



const app = express()
const port = process.env.PORT || 3000

const urlDB = "mongodb://localhost:27017/ludiqumans"
const mongoStore = MongoStore(expressSession);

// Body Parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.use(express.static('public'));
app.use(connectFlash())
app.use(fileupload())
app.use(methodOverride('_method'))

// app.use('*', (req, res, next) => {
//     res.locals.user = req.session.userId;
//     next()
// })


moment().format('DD MM YYYY');

// Helpers
// **************limitEach***********
Handlebars.registerHelper('reverse', function (arr) {
    if (!Array.isArray(arr)) { return []; }
    return arr.reverse();
  });

  Handlebars.registerHelper('limitEach', function (arr, limitEach) {
    if (!Array.isArray(arr)) { return []; }
    return arr.slice(-limitEach).reverse();
  });

    

app.use(expressSession ({
    secret: 'securite', 
    name: 'cookie',
    saveUninitialized: true, 
    resave: false, 

    store: new mongoStore(
        {mongooseConnection: mongoose.connection}
    )
}));

// Mongoose
mongoose.connect( urlDB, {
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


const router = require('./api/router')
app.use("/", router)


// Error404
app.use( (req, res) => {
    res.render('error404')
})

  

// Port
app.listen(port, function () {
    console.log("Le serveur tourne sur le port : " + port);
})