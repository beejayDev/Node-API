const mongoose = require("mongoose");
mongoose.set("debug",true)
const { Schema } = mongoose;

const todoSchema = new Schema({
	name: {
		type: String,
		required: [true, "name cannot be blank"]
	},
	completed: {
		type: Boolean,
		default: false
	},
	created: {
		type: Date,
		default: Date.now
	}
})

const Todo = mongoose.model("Todo", todoSchema)

module.exports = Todo
