import React from 'react';

const Task = (props) => {

    const style = {
        color: '#ff6961',
    }
    const {text, date, id, active, important, finishDate} = props.task;
    if(active){
        return ( 
        <div>
            <p>
        <strong style={important ? style : null}>{text}</strong> <br/> deadline <span>{date} </span>
        <button onClick={() =>props.change(id)}>DONE</button>
        <button onClick={() => props.delete(id)} className='secondBtn'>X</button>
            </p>
        </div> 
    );} else {
        const finish = new Date(finishDate).toLocaleString()
        return (
            <div>
                <p>
        <strong >{text}</strong>  <em>(deadline <span>{date} </span>)</em>
        <br/>
        - task done on <span>{finish}</span>
        <button onClick={() => props.delete(id)} className='secondBtn'>X</button>
            </p>
            </div>
        )
    }
}
 
export default Task;