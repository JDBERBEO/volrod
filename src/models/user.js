const { model, Schema, models } = require("mongoose");

const userSchema = new Schema({
	name: {
		type: String,
		trim: true,
		required: [true, "name is required"],
	},
	job: {
		type: String,
	},
	personalId: {
		type: Number,
	},
});

const User = model("User", userSchema);

module.exports = User;
