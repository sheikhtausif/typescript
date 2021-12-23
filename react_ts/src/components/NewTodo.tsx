import React, { useRef } from 'react'

interface NewTodoProps {
    handleAddTodo: (text: string) => void
}

const NewTodo: React.FC<NewTodoProps> = ({ handleAddTodo }) => {

    const textInputRef = useRef<HTMLInputElement>(null)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const enteredText = textInputRef.current!.value
        if (enteredText === "") {
            alert("Please enter a value")
            return;
        }
        handleAddTodo(enteredText)
        textInputRef.current!.value = ""
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>TODO APP</h2>
            <input type="text" id="new_todo" placeholder="Add new task" ref={textInputRef} />
            <button type="submit">ADD TODO</button>
        </form>
    )
}

export default NewTodo
