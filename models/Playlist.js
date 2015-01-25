var Mongoose = require('mongoose');
var ObjectId = Mongoose.Schema.ObjectId;

exports.PlaylistSchema = new Mongoose.Schema({
	spotify_id : { type : String, required : true },
	name : { type : String, required : true },
	pub : { type : Boolean, default : false },
	users : [ {type : mongoose.Schema.ObjectId, ref: 'User'} ],
	tracks : [String]
});