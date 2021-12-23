import { RequestHandler } from "express";
import { Todo } from "../models/todo.model";

const TODOS: Todo[] = []

// to create a new todo
export const createTodo: RequestHandler = (req, res) => {
    const { title, description } = req.body as { title: string, description: string }

    const id = (TODOS.length + 1).toString();
    const newTodo = new Todo(id, title, description);
    TODOS.push(newTodo);

    res.status(201).json({ message: "todo created!", todo: newTodo });
}

// to get all todos
export const getTodos: RequestHandler = (_, res) => {
    res.status(200).json({ message: "todos fetched!", total: TODOS.length, todos: TODOS });
}

// to update a todo
export const updateTodo: RequestHandler<{ id: string }> = (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body as { title: string, description: string };

    const todoIndex = TODOS.findIndex(todo => todo.id === id);

    if (todoIndex < 0) {
        throw new Error('Todo not found!');
    }

    TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, title, description);

    res.status(200).json({ message: "todo updated!", todo: TODOS[todoIndex] });
}

// to delete a todo
export const deleteTodo: RequestHandler<{ id: string }> = (req, res) => {
    const { id } = req.params;

    const todoIndex = TODOS.findIndex(todo => todo.id === id);

    if (todoIndex < 0) {
        throw new Error('Todo not found!');
    }

    TODOS.splice(todoIndex, 1);

    res.status(200).json({ message: "todo deleted!" });
}