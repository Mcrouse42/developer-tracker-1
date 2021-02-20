const path = require('path');
const express = require('express');
const routes = require('./controllers');
const exphbs = require('express-handlebars');
const session = require('express-session');
const Handlebars = require('handlebars');
const HandlebarsIntl = require('handlebars-intl');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
const { Skills } = require('./models');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

const hbs = exphbs.create({});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// handlebars helpers
// Handlebars.registerHelper('reverseWord', function(value){
//   var reversedWord = value.split("").reverse().join("");
//   return reversedWord;
// });

// app.get('/', function(req, res) {
//   var data = {
//     myWord: 'Wombat',
//     reallyImportantNumber: 65356
//   };
//   res.render('homepage', data);
// });

Handlebars.registerHelper('ifEquals', function(arg1, arg2, options) {
  return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});



// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
