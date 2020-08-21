const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const exphbs = require('express-handlebars');
const flash = require('express-flash');
const session = require('express-session');

// Load config
dotenv.config({ path: './config/config.env' });

const app = express();

app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', '.hbs');

// Static folder and files e.g(css, image)
app.use(express.static(path.join(__dirname, 'public')));
// Express body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Flash and sessions
app.use(
  session({
    secret: `${process.env.SECREET}`,
    saveUninitialized: true,
    resave: true,
  })
);

app.use(flash());

// Routes
app.use('/', require('./routes/index'));

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port: ${PORT} `
  )
);
