// npm packages to import
const express = require('express');
require('dotenv').config();

// import database connection settings
const db = require('./config/database');

// import route file
const characterRoutes = require('./api/routes/characters.routes');
const uiRoutes = require('./ui/routes/main.routes');
// constants from settings file
let {
    PORT, 
    APPNAME
} = require('./config/settings');

// define the app
const app = express();
app.use(express.json());

//tell it to use ejs
app.set('view engine', 'ejs');

// initializing the connection to the database
db();

// create express router object for the project
const router = express.Router();
const uiRouter =express.Router();
console.log('created router');

// tell the app to use the routes
app.use('/api', router);
console.log('told app to use router.');
characterRoutes(router);
console.log('use character router.');

// tell the app to use ui routes
app.use('/', uiRouter);
uiRoutes(uiRouter)

app.listen(PORT, () => {
    console.log(`${APPNAME} is listening on port ${PORT}...`);
});
