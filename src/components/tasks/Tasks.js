//TODO: Delete these instructions (when coding is completed) prior to commiting to master
// As a user who needs to track tasks, I should be able to enter in a task name, and an expected completion date, and be able to mark them as complete
// ---------------------------------------------------------------------------------------------------------------
// Acceptance Criteria
// Given a user wants to enter a task
// When the user clicks an affordance for entering a new task (i.e. button or hyperlink)
// Then a form should be presented to the user with a field to enter in the task name
// And a field to enter in the expected completion date

// Given a user wants to mark a task complete
// When the user is viewing their task list
// Then there should be a checkbox next to each task that, when clicked, should mark the task as complete in the database
// And prevent the task from being displayed in the list

// Given a user wants to edit a task name
// When the user clicks on the name of a task
// Then the user should be able to edit the name of the task
// And when the enter key is pressed, the new task name should be saved to the database
// And the task list should be updated to display the new task name

//FIXME:  Commenting the code below to start the testing phase to see the tasks in the DOM initially.
// import React, { Component } from 'react'
// import taskpic from "./taskpic.png"
// import "./tasks.css"

//FIXME:  Commenting the code below to start the testing phase to see the tasks in the DOM initially.
// export default class Tasks extends Component {
//     render () {
//         return (
//             <section className="tasks">
//             {
//                 this.props.tasks.map(task =>
//                     <div key={task.id} className="card">
//                         <div className="card-body">
//                             <div className="card-title">
//                                 {/* Get the task picture, attach the task's name and a button whose onclick property edits that specific task*/}
//                                 <img src={taskpic} className="taskpic" alt=""/>
//                                 <h5>{task.name}</h5>
//                                 <button
//                                     onClick={() => this.props.editTask(task.id)}
//                                     className="card-link">Edit</button>
//                             </div>
//                         </div>
//                     </div>
//                 )
//             }
//             </section>
//         )
//     }
// }


import React, { Component } from 'react'

export default class Tasks extends Component {

  render() {
    return (
      <div>
          <h3>Sending Task data to DOM</h3>
          {
          this.props.tasks.map(task =>
            <section key={task.id}>
              <h4>{task.task}</h4>
            </section>
          )
          }
      </div>
    )
  }
}

//TODO: Delete later
//     render() {
//         return (
//             <React.Fragment>
//                 <Route exact path="/" render={(props) => { //The path is / and represents the default location--requires the <exact path> descriptor!
//                     return <LocationList locations={this.state.locations} />// State is being passed to locations
//                 }} />
//                <Route exact path="/animals" render={() => {
//                 // The deleteAnimal function is being passed to the AnimalList component.
//                     return <AnimalList deleteAnimal={this.deleteAnimal}
//                                         animals={this.state.animals} />
//                 }} />
//                 <Route path="/employees" render={(props) => {
//                 // The deleteEmployee function is being passed to the EmployeeList component.
//                     return <EmployeeList deleteEmployee={this.deleteEmployee}
//                                         employees={this.state.employees} />
//                 }} />
//                 <Route path="/owners" render={(props) => {
//                 // The deleteOwners function is being passed to the OwnerList component.
//                     return <OwnerList   deleteOwner={this.deleteOwner}
//                                         owners={this.state.owners} />
//                 }} />
//             </React.Fragment>
//         )
//     }