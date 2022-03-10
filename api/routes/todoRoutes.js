const express = require("express");
const router = express.Router();
const todoController = require('../controllers/todoController');

router.route("/").get(todoController.getTodos).post(todoController.addTodo);

router.route("/:id").delete(todoController.deleteTodo).put(todoController.updateTodo);

module.exports = router;