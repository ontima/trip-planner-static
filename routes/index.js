var express = require('express');
var router = express.Router();
var models = require('../models/');

var Hotel = models.Hotel;
var Activity = models.Activity;
var Restaurant = models.Restaurant;

router.get('/', function(req, res) {

	Hotel.find({}).exec().then(function(dbHotels) {
	    Restaurant.find({}).exec().then(function(dbRestaurants) {
	        Activity.find({}).exec().then(function(dbActivities) {
	            res.render('index', {
	                templateHotels: dbHotels,
	                templateRestaurants: dbRestaurants,
	                templateActivities: dbActivities
	            });
	        }).then(null, console.log);
	    }).then(null, console.log);
	}).then(null, console.log);

});

module.exports = router;