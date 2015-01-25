var Mongoose = require('mongoose');
var ObjectId = Mongoose.Schema.ObjectId;

exports.UserSchema = new Mongoose.Schema({
	spotify_id : { type : String, required : true },
	display_name : { type : String, required : true },
	email : { type : String, required : true },
	href : { type : String, required : false },
	product : { type : String, required : false },
	type : { type : String, required : true },
	uri : { type : String, required : false },
	playlists : [ {type : ObjectId, ref : 'Playlist'} ]
});

