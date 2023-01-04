import { useState } from "react";
import TaskForCrud from "./TaskForCrud";
    
function CrudApp() {
    const [toDoList, setToDoList] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleChage = (event) => {
        setNewTask(event.target.value);
    }

    const AddNewTask = () => {
        const task = {
            id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1,
            taskName: newTask,
            completed : false,
        };
        setToDoList([ ...toDoList, task]);
    }

    const taskCompleted = (id) => { 
        setToDoList(
            toDoList.map((task) => {
                if (task.id === id) {
                    return ({...task, completed: true});
                }
                else
                {
                    return task;
                }
            })
        );
    };

    const removeTask = (id) => {
        return setToDoList(toDoList.filter((item) => item.id !== id));
    };


    return (
      <div className="app">
        <div className="addTask">
          <input onChange={handleChage} />
          <button onClick={AddNewTask}>Add Task</button>
            </div>
            
        <div className="list">
                {toDoList.map((task) => {
              return (
                <TaskForCrud
                  taskName={task.taskName}
                  id={task.id}
                  completed = {task.completed}
                  removeTask={removeTask}
                  taskCompleted={taskCompleted}
                />
              );
          })}
        </div>
            
      </div>
    );
}

export default CrudApp;