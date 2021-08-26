import React from 'react';
import Task from './Task.js'

const TaskList = (props) => {

    const activeTasks = props.tasks.filter(task => task.active);
    const finishedTasks = props.tasks.filter(task => !task.active);
    
    // const tasks = props.tasks.map(task => <Task key={task.id} task={task} remove={props.deleteTask} finish={props.finishTask} />);

    const active = activeTasks.map(active => <Task key={active.id} task={active} remove={props.deleteTask} finish={props.finishTask} />);

    const finished = finishedTasks.map(finished => <Task key={finished.id} task={finished} remove={props.deleteTask} />);

    return (
        <> 
            <div className="activeTask">
                <h1>Zadania do zrobienia</h1>
                {active.length > 0 ? active : <p><strong>Brak zadań</strong></p>}
            </div>

            <hr />

            <div className="doneTask">
                <h3>Zadania zrobione {finishedTasks.length}</h3>
                <span>5 ostatnich elementów</span>
                {finished.slice(0,5)}
            </div>
        </>
     );
}
 
export default TaskList
