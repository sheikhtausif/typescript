import React, { useState } from 'react';
import NewTodo from './components/NewTodo'
import TodoList from './components/TodoList'
import { TodoType } from './todo.model'
import './App.css';


const App: React.FC = () => { // React.FC = Function Component

    const [todos, setTodos] = useState<TodoType[]>([]);

    const handleAddTodo = (text: string) => {

        const newTodo = { id: todos.length + 1, text: text.toUpperCase() }
        setTodos([...todos, newTodo])
    }

    const handleDelete = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return (
        <div>
            <NewTodo handleAddTodo={handleAddTodo} />
            <TodoList items={todos} handleDelete={handleDelete} />
        </div>
    )
}

export default App
