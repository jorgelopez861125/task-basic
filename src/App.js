
import { useState } from 'react';
import './App.css';

function App() {
  const [enter, setEnter] = useState('');
  const [arrayTasks, setArrayTasks] = useState([]);
  const submitHandler = (e) =>{
    e.preventDefault();
    setArrayTasks([...arrayTasks, enter]);    
  }
  return (
    <div className="main-task">
      <h1>Task Basic</h1>
      <h3>Enter a Task</h3>
      <form onSubmit={submitHandler}>
        {" "}
        
        <input type="text" placeholder='Enter task...' value={enter} onChange={(e) => setEnter(e.target.value)}/>
        <button type='submit'>ADD TASK</button>
      </form>
        <div className='tasks-list'>
          {arrayTasks.map((task, index) => (<div key={index} className='task-card'>{task}</div>))}
        </div>
    </div>
  );
}

export default App;
