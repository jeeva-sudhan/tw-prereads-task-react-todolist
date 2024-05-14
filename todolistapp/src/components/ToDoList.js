import { useState } from "react";
import '../App.css'

export default function ToDoList() {
    const toDoItems = [
        {todoitem:"Read SpringBoot",isCompleted:false},
        {todoitem:"Complete assignments",isCompleted:false},
        {todoitem:"Prepare breakfast",isCompleted:false},
        {todoitem:"Sleep for 2 hours",isCompleted:false},
        {todoitem:"Take a shower",isCompleted:false}
    ];

    const [tasks, setTasks] = useState(toDoItems);

    function markTaskAsCompleted(taskIndex) {
        const updatedToDoItems = tasks.slice();
        updatedToDoItems[taskIndex].isCompleted = !updatedToDoItems[taskIndex].isCompleted;
        setTasks(updatedToDoItems);
    }

    function handleRemoveItems() {
        const toDoTasks = tasks.slice();
        const inCompletedTasks = toDoTasks.filter((item) => {
            return !item.isCompleted;
        });
        setTasks(inCompletedTasks);
    }

    return (
        <>
            {(tasks.length === 0)?(
                <h1 style={{fontStyle:'italic'}}>Nothing to do buddy. Sleep!</h1>
            ):(
                <div className="todotasks">
                    <ul type="square">
                        {tasks.map((item,index) => {
                            return ( 
                            <> 
                                <li 
                                    key={index} 
                                    onClick={() => {markTaskAsCompleted(index)}} 
                                    style={{textDecoration:(item.isCompleted)?('line-through'):('none'),cursor:'pointer'}}
                                    > {item.todoitem}
                                </li>
                                <br />
                            </>
                            );
                        })}
                    </ul>
                    <br />
                    <button onClick={handleRemoveItems} className="removeBtn">Remove Completed</button>
                </div>
            )}
        </>
    );
}