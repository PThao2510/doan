const path = require('path');
const express = require('express')
const morgan = require('morgan');
const methodOverride = require('method-override')
const { engine } = require ('express-handlebars');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');
const route = require('./routes');
const db = require('./config/db');
require('./config/Passport/passport'); // pass passport for configuration

//connect to DB
db.connect();

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.use(methodOverride('_method'));

app.use(session({
  secret: 'adsa897adsa98bs',
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize())
app.use(passport.session());
app.use(flash());
// require('./config/Passport/passport')(passport);

//HTTP logger
//app.use(morgan('combined'));

//Template engine
app.engine('hbs', engine({
  extname: '.hbs',
  helpers:{
    sum: (a,b) => a + b,
}
}));

app.set('view engine','hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//Routes init
route(app);

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
})