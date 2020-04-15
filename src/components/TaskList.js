import React from 'react';
import Task from './Task';

const TaskList = (props) => {

    // const tasks =props.tasks.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change}/>)

    const active = props.tasks.filter(task => task.active)

    const done = props.tasks.filter(task => !task.active)

    if(done.length>=2){
    done.sort((a, b) =>{
        return b.finishDate - a.finishDate
    })}

    if(active.length>=2){
        active.sort((a,b) => {

            a = a.text.toLowerCase()
            b = b.text.toLowerCase()

            if(a < b) return -1
            if(a > b) return 1
            return 0
        })
    }

    const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change}/>)

    const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change}/>)

    return (
        <div className="flex">
        <div className='active'>
            <h1>Tasks to do: ({activeTasks.length})</h1>
            {activeTasks.length > 0 ? activeTasks : <p>No tasks to do, you are happy man!</p>}
        </div>
        
        <div className="done">
            <h1>Finished tasks: ({doneTasks.length})</h1>
            {done.length> 5 &&<span style={{fontSize: '10px'}}>Only 5 last tasks are being shown</span>}
            {doneTasks.slice(0,5)}
        </div>
        </div> 
     );
}
 
export default TaskList;