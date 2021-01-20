const express = require('express');
const router = express.Router();
const db = require("../models/todo");
/* GET home page. */
router.get('/', async (req, res, next) => {
	try { 
		const allTodo = await db.find({});
		res.json(allTodo);
		console.log(allTodo);
	} catch(e) {
		console.log(e)
		next(e)
	}
});

router.post("/", async(req, res, next) => {
	try { 
		const todoBody = req.body;
		const todo = new db(todoBody);
		await todo.save();
		res.status(201).json(todo);
		console.log(todo)
	} catch(e) {
		next(e)
	}


});

router.get("/:todoId", async(req, res, next) => {
	try { 
		const { todoId } = req.params;
		const foundTodo = await db.findById(todoId);
		res.json(foundTodo)
	} catch(e) {
		next(e);
	}


});

router.put("/todoId", (req, res, next) => {
	try {
		const { todoId } = req.params;
		const foundtodo = await db.findByIdAndUpdate(todoId, { ...req.body });
		res.json(foundTodo)
	} catch(e) {
		next(e)
	
	res.json(foundTodo)
	} catch(e) {
		next(e)
	}
});

router.delete("/todoId", async (req, res, next) => {
	try {
		const { todoId } = req.params;
		const deleteTodo = await db.findByIdAndDelete(todoId);
		res.json({ message: "We deleted it" })
	} catch(e) {
		next(e)
	}
});




module.exports = router;
