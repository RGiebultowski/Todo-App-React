import React, { Component } from 'react';

class NewTask extends Component {
    
    minDate = new Date().toISOString().slice(0,10);
    
    state = { 
        text: '',
        checked: false,
        date: this.minDate,
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

    handleCheckBox = (e) => {
        this.setState({
            checked: e.target.checked
        })
    }

    handleClick = () => {
        const {text, date, checked} = this.state;
        const add = this.props.addTask(text, date, checked);
        if(add) {
            this.setState({
                text:'',
                checked: false,
                date: this.minDate
            })
        }
    }

    render() { 
        
        return ( 
            <div>
                <input type="text" placeholder="wprowadź zadanie"
                 value={this.state.text} onChange={this.handleText}/>
                 <input type="checkbox" checked={this.state.checked} id="important" onChange={this.handleCheckBox}/>
                 <label htmlFor="important">Ważny</label>
                 <br />
                 <input type="date" id="date" value={this.state.date}  min={this.minDate} onChange={this.handleDate}/>
                 <label htmlFor="date"> :deadline</label>
                 <br />
                 <button onClick={this.handleClick}>Dodaj</button>
            </div>
         );
    }
}
 
export default NewTask;