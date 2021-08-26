import React from 'react';

const Task = (props) => {

    const style = {
        color: 'red',
    }

    const {text, date, id, active, important, doneDate} = props.task; //destrukturyzacja
    if(active){
        return ( 
            <div>
                <p>
                    <strong style={important ? style : null}>{text}</strong> <span>deadline: {date} </span>
                    <button onClick={() => props.finish(id)}>Zakończ</button>
                    <button onClick={() =>  props.remove(id)}>X</button>
                </p>
            </div>
         );
    }else {
        const doneTaskDate = new Date(doneDate).toLocaleString();
        return (
            <div>
                <p>
                    <strong style={important ? style : null}>{text}</strong> <span>deadline: {date} </span>
                    <br />
                    <em>wykonano {doneTaskDate}</em>
                    <button onClick={() =>  props.remove(id)}>X</button>
                </p>
            </div>
        );
    }
    
}
 
export default Task;