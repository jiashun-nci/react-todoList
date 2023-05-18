import React, { useState } from 'react'
import Todo from './Todo'

function TodoList({todoList, handleToggle, handleFilter}) {
    // console.log(todoList)
    return (
        <div>
            {/* display todos here */}
            {todoList.map(todo => {
                return (
                    <Todo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                )
            })}
            <br />
            <button onClick={handleFilter}>Clear Complete Tasks</button>
        </div>
    );
};

export default TodoList;