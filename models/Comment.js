const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
	username: { type: String, required: true },
	body: { type: String, required: true },
	zipcode: { type: String, required: true },
	imageUrl: {type: String},
	date: { type: Date, default: Date.now },
	status: [
		{
			// type: Schema.Types.ObjectId,
			// ref: "Status"
			startDate: { type: Date},
			endDate: {type: Date},
			requestingUser: {type: String},
			requestingUserId: {type: String},
			requested: {type: String, default: "Available" }
		}

	]
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
