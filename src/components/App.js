import React, { Component } from 'react';
import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';

class App extends Component {

  counter = 7
  state = { 
    tasks:[
      {
        id: 0,
        text: 'Finally play Witcher 3',
        date: "2020-05-12",
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 1,
        text: 'Drink beer with friends',
        date: "2020-05-12",
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 2,
        text: 'Go to park for walk',
        date: "2020-05-12",
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 3,
        text: 'Eat pasta',
        date: "2020-05-12",
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 4,
        text: 'Go to Biedronka',
        date: "2020-05-12",
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 5,
        text: 'Go cycling',
        date: "2020-05-12",
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 6,
        text: 'Make the bed',
        date: "2020-05-12",
        important: true,
        active: true,
        finishDate: null
      }
    ]
   }

  deleteTask = (id) => {
    // console.log('delete' + id)
    // const tasks = [...this.state.tasks];
    // console.log(tasks)
    // const index = tasks.findIndex(task => task.id===id)
    // tasks.splice(index, 1)
    // console.log(tasks)

    // this.setState({
    //   tasks
    // })

    let tasks = [...this.state.tasks]
    tasks = tasks.filter(task => task.id!==id)
    this.setState({
      tasks
    })
  }

  changeTaskStatus = (id) => {
    console.log('done' + id)
    const tasks = Array.from(this.state.tasks)
    tasks.forEach(task => {
      if(task.id ===id){
        task.active = false
        task.finishDate = new Date().getTime()
      }
      this.setState({
        tasks
      })
    })
  }
  AddTask = (text, date, important) => {
    const task = {
        id: this.counter++,
        text, //tekst z inputa
        date, //tekst z inputa
        important, //wartość z inputa
        active: true,
        finishDate: null
    }
    // this.counter++
    console.log(task, this.counter)
    this.setState(prevState => ({
      tasks: this.state.tasks.concat(task)
    }))
    return true
  }

  render() { 
    return ( 
    <div className="App">
      <h1>To Do App</h1>
      <AddTask add={this.AddTask}/>
      
      <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus}/>
    </div> )
  }
}
 
export default App;