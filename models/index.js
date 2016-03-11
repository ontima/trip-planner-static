var mongoose = require('mongoose');
// Notice the `mongodb` protocol; Mongo is basically a kind of server,
// which handles database requests and sends responses. It's async!
mongoose.connect('mongodb://localhost/tripplanner'); // <= db name will be 'wikistack'
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));

var placeSchema = new mongoose.Schema ({
	address: {type: String},
	city: {type: String},
	state: {type: String},
	phone: {type: String},
	location: {type: Array}
});

var hotelSchema = new mongoose.Schema ({
	name: {type: String},
	place: placeSchema,
	num_stars: {type: Number},
	amenities: {type: String}
});

var activitySchema = new mongoose.Schema ({
	name: {type: String},
	place: placeSchema,
	age_range: {type: String}
});

var restaurantSchema = new mongoose.Schema ({
	name: {type: String},
	place: placeSchema,
	price: {type: Number, min: 1, max: 5},
	cuisine: {type: String}
});

var Place = mongoose.model('Place', placeSchema);
var Hotel = mongoose.model('Hotel', hotelSchema);
var Activity = mongoose.model('Activity', activitySchema);
var Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = {
	Place: Place,
	Hotel: Hotel,
	Activity: Activity,
	Restaurant: Restaurant
};