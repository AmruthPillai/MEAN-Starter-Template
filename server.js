// ==========
// Modules
// ==========
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();

// Database Configuration
var db = require('./config/db');

// Set Port
var port = process.env.PORT || 8080;

// Connect to MongoDB Database
// mongoose.connect(db.url);

// Get all data of the body (POST) parameters
// Parse application/json
app.use(bodyParser.json());

// Parse application/vnd.api+json as json
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// Override with the X-HTTP-Method-Override header in the request.
// Simulate DELETE/PUT requests
app.use(methodOverride('X-HTTP-Method-Override'));

// Set the static files location
// Eg. /public/img will be /img for users
app.use(express.static(__dirname + '/public'));

// ==========
// Routes
// ==========
require('./app/routes')(app);

// ==========
// Start Application
// ==========
// Fire up app at http://localhost:PORT
app.listen(port);

// Log to the console about successful server startup
console.log('The server has started at http://localhost:' + port);

// Export/Expose Application
exports = module.exports = app;
