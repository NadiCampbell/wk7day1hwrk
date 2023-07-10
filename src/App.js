import './App.css';
import React, {useState} from 'react'; 

  function App() {
    const [tasks, setTasks] = useState([
      {name : "Buy shopping", priority: "high"},
      {name: "Clean bathroom", priority: "low"},
      {name: "Car's MOT", priority: "high"}
    ]);

    const [newTask, setNewTask] = useState("");

    const handleNewTask = (event) => {
      setNewTask(event.target.value);
    }


    const handleAddToDo = (event) => {
      event.preventDefault();
      setTasks((previousState) => {
        return [
          ...previousState,
          newTask
        ]
      });
      setNewTask("");
    } 
    
    const taskNodes = tasks.map(function(task, index){
      return (
        <li key={index} className={task.priority ? "high" : "low"}>
          <span>
            {task.name}
          </span>
        </li>
      )
    });

    return (
      <div className="App">
        <h1>ToDo's</h1>
        <form onSubmit={handleAddToDo}>
        <label className="new-todo"></label>
        <input id="new-todo" type="text" value={newTask} onChange={handleNewTask}/>
        <label>High<input type="radio" value="high"/></label>
        <label>Low<input type="radio" value="low"></input></label>
        <button onClick={handleAddToDo}>Save Item</button>
        </form>
        <ul>
            {taskNodes}
        </ul>
      </div>
    );
  };

  export default App;
