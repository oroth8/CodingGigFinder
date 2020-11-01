const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
 
// const Handlebars = require('handlebars')
// const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
// const hbs = exphbs.create({
//     defaultLayout: 'main', 
//     extname: 'hbs',
//     handlebars: allowInsecurePrototypeAccess(Handlebars)
//   });

// Database
const db = require('./config/connection');
// TEST DB
db.authenticate()
.then(()=>console.log('Database connected...'))
.catch(err => console.log('Error'+err))

const app = express(); 

// handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Body Parser
app.use(bodyParser.urlencoded({extended: false}));

// set static folder
app.use(express.static(path.join(__dirname, 'public'))) 

// Index route
app.get('/',(req,res) => res.render('index', {layout: 'landing'}));

// Gig routes
app.use('/gigs', require('./routes/gigs')); 

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`)); 