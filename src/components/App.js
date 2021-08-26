import React, { Component } from 'react';
import './App.css';
import NewTask from './NewTask.js';
import TaskList from './TaskList.js';

class App extends Component {

  counter = 0;

  state= {
    tasks: [],
  }

  deleteTask = (id) => {
    // console.log("delete")
    // console.log(id)
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task.id === id);
    tasks.splice(index, 1);

    this.setState({
      tasks
    })
  }

  finishTask = (id) => {
    // console.log("finish")
    // console.log(id)

    const tasks = [...this.state.tasks];
    tasks.forEach(task => {
      if(task.id === id){
        task.active = false;
        task.doneDate = new Date().getTime()
      }
    })

    this.setState({
      tasks
    })

  }

  addTask = (text, date, important) =>{
    // console.log("addTask")

    const task = {
      id: this.counter,
      text: text, //new task input
      date: date, //new task input
      important: important, //new task imput
      active: true,
      finishDate: null,

    }

    this.setState(prevState => ({
      tasks: [...prevState.tasks, task],
    }))

    this.counter++;

    return true;
  }

  render() {
    return (
      <div className="App">
        <NewTask addTask={this.addTask} />
        <TaskList tasks={this.state.tasks} deleteTask={this.deleteTask} finishTask={this.finishTask}/>
      </div>
    )
  }
  
}

export default App;
