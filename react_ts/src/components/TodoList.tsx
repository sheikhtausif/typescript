import React from 'react'

interface TodoListProps {
    items: { id: number, text: string }[],
    handleDelete: (id: number) => void
}

const TodoList: React.FC<TodoListProps> = ({ items, handleDelete }) => {

    return (
        <ul>
            {items.map(todo => (
                <li key={todo.id}>{todo.text}
                    <button onClick={handleDelete.bind(null, todo.id)}>DELETE</button>
                </li>
            ))}
        </ul>
    )
}

export default TodoList
