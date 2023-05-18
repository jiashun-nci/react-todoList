import React, { useState } from 'react'



const TodoForm = ({addTask}) => {
    const [userInput, setUserInput] = useState("");

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Add new task" value={userInput} onChange={handleChange} />
                <button>Add</button>
            </form>
        </div>
    )
}

export default TodoForm;