"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodos = exports.createTodo = void 0;
const todo_model_1 = require("../models/todo.model");
const TODOS = [];
// to create a new todo
const createTodo = (req, res) => {
    const { title, description } = req.body;
    const id = (TODOS.length + 1).toString();
    const newTodo = new todo_model_1.Todo(id, title, description);
    TODOS.push(newTodo);
    res.status(201).json({ message: "todo created!", todo: newTodo });
};
exports.createTodo = createTodo;
// to get all todos
const getTodos = (_, res) => {
    res.status(200).json({ message: "todos fetched!", total: TODOS.length, todos: TODOS });
};
exports.getTodos = getTodos;
// to update a todo
const updateTodo = (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    const todoIndex = TODOS.findIndex(todo => todo.id === id);
    if (todoIndex < 0) {
        throw new Error('Todo not found!');
    }
    TODOS[todoIndex] = new todo_model_1.Todo(TODOS[todoIndex].id, title, description);
    res.status(200).json({ message: "todo updated!", todo: TODOS[todoIndex] });
};
exports.updateTodo = updateTodo;
// to delete a todo
const deleteTodo = (req, res) => {
    const { id } = req.params;
    const todoIndex = TODOS.findIndex(todo => todo.id === id);
    if (todoIndex < 0) {
        throw new Error('Todo not found!');
    }
    TODOS.splice(todoIndex, 1);
    res.status(200).json({ message: "todo deleted!" });
};
exports.deleteTodo = deleteTodo;
//# sourceMappingURL=todos.controller.js.map