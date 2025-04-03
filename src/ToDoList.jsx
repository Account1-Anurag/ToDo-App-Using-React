// // import './ToDoList.css';

// // export default function TodoList(){
// //     function addTask(){
// //         let list=document.getElementById("List-items");
// //         let inp=document.getElementById("input");
        
// //     }
// //     return (
// //         <div className="home">
// //             <p id='para'>To Do List</p>
// //             <input id='input'></input>
// //             <button id='button' onClick={addTask}>Add</button>
// //             <ul>
// //                 <li id='List-items'></li>
// //             </ul>
            
// //         </div>  
// //     );
// // }



import './ToDoList.css';
import { useEffect, useState } from 'react';

export default function TodoList() {
    let [todos, setTodos] = useState(() => {
        return JSON.parse(localStorage.getItem("notes")) || [];
    });
    let [newTodo, setNewTodo] = useState("");
    let [editingIndex, setEditingIndex] = useState(null); 

    let addNewTask = () => {
        if (newTodo.trim() === "") return; 
        if (editingIndex !== null) {
            const updatedTodos = [...todos];
            updatedTodos[editingIndex] = newTodo;
            setTodos(updatedTodos);
            setEditingIndex(null);
        } else {
            setTodos([...todos, newTodo]);
        }
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let editTask = (index) => {
        setNewTodo(todos[index]); // Load the selected task into input field
        setEditingIndex(index);
    };

    let deleteTask = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(todos));
    }, [todos]);

    return (
        <div className="home">
            <p id='para'>To Do List</p>
            <input id='input' 
                placeholder='Write the task'
                value={newTodo}
                onChange={updateTodoValue}
            />
            <button id='button' onClick={addNewTask}>
                {editingIndex !== null ? "Update Task" : "Add Task"}
            </button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <div className="btn-container">
                            <button className="edit-btn" onClick={() => editTask(index)}>✏️ </button>
                            <button className="delete-btn" onClick={() => deleteTask(index)}>❌ </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

