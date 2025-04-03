import { useState } from "react";

export default function LudoComponent({color}){
    let [moves,setMoves]=useState({blue:0,red:0,yellow:0,green:0,teal:0});
    let [arr,setArr]=useState(["No moves"]);
    let updateColor=()=>{
        setMoves((prevMoves)=>({
                ...prevMoves,
                [color]:prevMoves[color]+1
        }));

        setArr((prevArr)=> {return [...prevArr,`${color}Moves `]});
    }
    return (
        <>
            <p>{arr.join(',')}</p>
            <p>{color} moves: {moves[color]} </p>
            <button 
                style={{ backgroundColor: color, color: "black" }} 
                onClick={updateColor}>+1</button>
        </>
    );
}


/*
// import './ToDoList.css';
// import { useEffect, useState } from 'react';

// export default function TodoList(){
//     let [todos,setTodos]=useState(["Write down here"]);
//     let [newTodo,setNewTodo]=useState("");

//     let addNewTask=()=>{
//         setTodos([...todos,newTodo]);
//         setNewTodo("");
//     }

//     let updateTodoValue=(event)=>{
//         setNewTodo(event.target.value);
//     }

//     useEffect(() => {
//             localStorage.setItem("notes",JSON.stringify(todos))
//     }, [todos])
    
   
//     useEffect(() => {
//         function getnotes(){
//             const tod= JSON.parse(localStorage.getItem("notes"))||[]
//             setTodos(tod);
//         }
    
//         getnotes()
 
//     }, [])

//     return (
//         <div className="home">
//             <p id='para'>To Do List</p>
//             <input id='input' 
//             placeholder='Write the task'
//             value={newTodo}
//             onChange={updateTodoValue}
//             ></input>
//             <button id='button' onClick={addNewTask}>Add Task</button>
//             <br />
//             <br />
//             <br />
//             <br />
//             <ul>
//             {todos.map((todo, index) => (
//                     <li key={index}>{todo}</li> 
//                 ))}
//             </ul>
            
//         </div>  
//     );
// }
*/