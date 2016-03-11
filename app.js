var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var path = require('path');
var swig = require('swig');
// require('./filters')(swig);
var routes = require('./routes/')

var app = express();

// templating boilerplate setup
app.set('views', path.join(__dirname, '/views')); // where to find the views
app.set('view engine', 'html'); // what file extension do our templates have
app.engine('html', swig.renderFile);
swig.setDefaults({cache: false});
// logging middleware
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: true })); // for HTML form submits
app.use(bodyParser.json());
app.use('/', routes);


// the typical way to use express static middleware.
app.use(express.static(path.join(__dirname, '/public')));

var server = app.listen(1337, function(){
  console.log('listening on port 1337');
});


// catch 404 (i.e., no route was hit) and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// handle all errors (anything passed into `next()`)
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    console.log({error: err});
    res.render(
        // ... fill in this part
    );
});