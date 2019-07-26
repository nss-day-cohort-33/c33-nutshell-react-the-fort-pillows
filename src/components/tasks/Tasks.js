import React, { Link, Component } from 'react'
import { Button, Form, Modal, Icon } from "semantic-ui-react"
import TaskForm from "./TaskForm"
import API from '../../module/API';

const buttonMargin = {
  margin: "2em"
};

export default class Tasks extends Component {

handlecheck = task => {
  console.log("task",task)
  task.complete = !task.complete
  this.props.updateTask("tasks",task)
}

handleEditTask = task => {
  console.log("Edit task was clicked")
}

  render() {
    return (
      <div>
          <TaskForm addTask={this.props.addTask}
                    {...this.props}/>
          <h3>Sending Task data to DOM</h3>
          {this.props.tasks.filter(task => task.complete === false).map( task =>
               <section key={task.id}>
                <h4><a href="#" onClick={this.handleEditTask}>{task.task}</a></h4>
                <input id={task.id} type="checkbox" className="taskcheckbox" onClick={() => this.handlecheck(task)} />
            </section>
            )
            }
      </div>
    )
  }
}
