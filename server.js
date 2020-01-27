// Import Module
const express = require('express'); 
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');



const app = express()
const port = process.env.PORT || 3000
const router = require('./api/router')
app.use("/", router)

app.use(express.static('public'));

// Body Parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))



// Handlebars
var handlebars = require('handlebars')
app.engine('hbs', exphbs({
    extname: 'hbs', 
    defaultLayout: 'main'
 }));
app.set('view engine', 'hbs');

// Error404
app.use( (req, res) => {
    res.render('error404')
})

// Port
app.listen(port, function () {
    console.log("Le serveur tourne sur le port : " + port);
})