import React, { Component } from 'react';
import './AddTask.css';

class AddTask extends Component {
    
    minDate = new Date().toISOString().slice(0,10)
    state = { 
        text: '',
        checked: false,
        date: this.minDate
     }

    handleDate = (e) => {
        this.setState({
            date: e.target.value
        })
    }

    handleText = (e) => {
        this.setState({
            text: e.target.value
        })
    }
    handleChecked = (e) => {
        this.setState({
            checked: !this.state.checked
        })
    }
    handleClick = () => {
        console.log('dodany obiekt')
        const {text, checked, date} = this.state
        if(text.length > 2){
        const add = this.props.add(text, date, checked)
        if(add){
            this.setState({
                text: '',
                checked: false,
                date: this.minDate
            })}
        }else{
            console.log('To short')
        }
      }
    
    render() {
        let maxDate = this.minDate.slice(0,4) * 1 + 1 
        maxDate = maxDate +"-12-31"

        return ( 
            <div className='form'>
                <input type="text" placeholder='Add tast' value={this.state.text} onChange={this.handleText}/><br/>
                <input type="checkbox" checked={this.state.checked} id="important" onChange={this.handleChecked}/>
                <label htmlFor="important">Set priority</label>
                <br/>
                <label htmlFor="date">Set deadline: </label>
                <input type="date" id="date" value={this.state.date}
                min={this.minDate}max={maxDate} onChange={this.handleDate}/>
                <br/>
                <button onClick={this.handleClick}>Add!</button>
            </div>
         );
    }
}
 
export default AddTask;