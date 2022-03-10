const asyncHandler = require("express-async-handler");
const todoModel = require("../models/todoModel");

const getTodos = asyncHandler(async (req, res) => {
  try {
    const todos = await todoModel.find();
    res.status(200).json({
      todos
    });
  } catch (error) {
    throw error;
  }
});

const addTodo = asyncHandler(async (req, res) => {
  const { name, description, status } = req.body;
  const allTodos = await todoModel.find();
  try {
    const todo =await todoModel.create({name, description,status});
    
    res.status(200).json({
      allTodos
    });
  } catch (error) {
    throw error;
  }
});

const deleteTodo = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;

    await todoModel.findByIdAndDelete({ _id: id });
    const allTodos = await todoModel.find();

    res.status(200).json({ message: "To do deleted", allTodos });
  } catch (error) {
    res.status(400).json({ message: "Id not found" });
  }
});

const updateTodo = asyncHandler(async(req,res)=>{
  try {
    const { id } = req.params;

    await todoModel.findByIdAndUpdate({ _id: id },req.body);
    const allTodos = await todoModel.find();

    res.status(200).json({ message: "To do updated", allTodos });
  } catch (error) {
    res.status(400).json({ message: "Id not found" });
  }
})


module.exports = {
  getTodos,
  addTodo,
  deleteTodo,
  updateTodo
};

try {
} catch (error) {}
