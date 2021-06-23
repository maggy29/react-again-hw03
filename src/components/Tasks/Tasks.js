import React, {Component} from 'react';
import { v4 as uuidv4 } from 'uuid';
import TaskEditor from './TaskEditor';
import TaskFilter from './TaskFilter';
import TaskList from './TaskList';


export default class Tasks extends Component {
  state = {
    tasks: [],
    filter: '',
  }

  componentDidMount () {
    const tasksInLocalStorage = localStorage.getItem('tasks');
     if (tasksInLocalStorage) {this.setState({
         tasks: JSON.parse(tasksInLocalStorage)
     })
  }
  }
  componentDidUpdate (prevProps, prevState) {
        if (prevState.tasks !== this.state.tasks) {
          localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
      }
  }

  addTask = (text) => {
  const task = {
    text,
      id: uuidv4(),
      complited: false,
  };  
  
   this.setState(prevState => {
     return{
       tasks: [...prevState.tasks, task ]
     } 
   })
}

removeTask = (taskId) => {
  this.setState(prevState=>{
    return{
      tasks: prevState.tasks.filter(task=> task.id !==taskId)
    }
  })
}

updateCompleted = (taskId) => {
  this.setState(prevState => ({ 
    tasks: prevState.tasks.map(task => 
      task.id === taskId ? {...task, completed: !task.completed} : task
    )
  }))
}

filterTasks = (e) => {
  this.setState({ filter: e.target.value })
}

getFilteredTasks = () => {
  const {tasks, filter} = this.state;
  return tasks.filter(task => 
    task.text.toLowerCase().includes(filter.toLowerCase()),
    )
}

render(){
    const {tasks, filter} = this.state;
    const filteredTasks = this.getFilteredTasks();

    return (
      <div> 
        <TaskEditor onAddTask={this.addTask}/>
        {tasks.length > 1 && <TaskFilter 
          value={filter}
          onChangeFilter={this.filterTasks}/>}
        {tasks.length > 0 && <TaskList 
            tasks={tasks} 
            onRemoveTask={this.removeTask}
            onUpdateTask={this.updateCompleted}
        />} 
      </div>
    );
  }
}