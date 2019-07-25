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
import { Button, Form, Modal, Icon } from "semantic-ui-react"
import TaskForm from "./TaskForm"

const buttonMargin = {
  margin: "2em"
};

export default class Tasks extends Component {

// handleclick = () => {
//   console.log("I was clicked.")
// }
  render() {
    return (
      <div>
          <TaskForm addTask={this.props.addTask}
                    {...this.props}/>
          <h3>Sending Task data to DOM</h3>
          {this.props.tasks.map(task =>
            <section key={task.id}>
              <h4>{task.task}</h4>
            </section>
          )}
      </div>
    )
  }
}

//*************************************************************
//TODO:  Delete Later--FROM Here 1--Being used to study code--Joy
// import React, { Component } from "react";
// import { Button, Form, Modal, Icon } from "semantic-ui-react";

// const buttonMargin = {
//   margin: "2em"
// };

// export default class EventForm extends Component {
//   state = {
//     eventName: "",
//     date: "",
//     description: "",
//     location: "",
//     open: false
//     //-- Open is intialized to false to keep the modal closed when the user visits the page --//
//   };

//   toggle = () => { //When this function is called, it sets the value of modalOpen to the opposite value.
//   this.setState({modalOpen: !this.state.modalOpen})
//   }

//   handleFieldChange = evt => {
//     const stateToChange = {};
//     stateToChange[evt.target.id] = evt.target.value;
//     this.setState(stateToChange);
//   };

//   constructNewEvent = evt => {
//     evt.preventDefault();
//     const task = {
//       name: this.state.eventName,
//       date: this.state.date,
//       description: this.state.description,
//       location: this.state.location
//     };
//     this.props.addEvent(event);
//     this.toggle()
//     //--This toggle will close the Modal upon click --//
//   };

//   render() {
//     return (
//       <div>
//         <Modal

//           trigger={
//             //-- Put toggle in trigger to make Modal appear on click --//
//             <Button primary icon labelPosition="left" style={buttonMargin} onClick={this.toggle}>
//               <Icon name="add" />
//               Add Event
//             </Button>
//           }
//           //-sets state of Modal to current state--//
//           open={this.state.modalOpen}
//         >
//           <div className="closeButton"><Modal.Header><Button icon="window close" onClick={this.toggle} /></Modal.Header></div>
//           <Modal.Header>Add Your Event</Modal.Header>
//           <Modal.Content>
//             <Form>
//               <Form.Field required>
//                 <label htmlFor="eventName">Event Name</label>
//                 <input
//                   id="eventName"
//                   placeholder="Name of Event"
//                   onChange={this.handleFieldChange}
//                   autoFocus
//                   required
//                 />
//               </Form.Field>
//               <Form.Field required>
//                 <label htmlFor="date">Date</label>
//                 <input
//                   type="date"
//                   id="date"
//                   placeholder="Date"
//                   onChange={this.handleFieldChange}
//                   required
//                 />
//               </Form.Field>
//               <Form.TextArea
//                 id="description"
//                 label="Event Description"
//                 placeholder="Describe the Event"
//                 onChange={this.handleFieldChange}
//                 required
//               />
//               <Form.Field required>
//                 <label htmlFor="location">Location</label>
//                 <input
//                   id="location"
//                   placeholder="Location"
//                   onChange={this.handleFieldChange}
//                   required
//                 />
//               </Form.Field>
//               <Button type="submit" onClick={this.constructNewEvent}>
//                 Submit
//               </Button>
//             </Form>
//           </Modal.Content>
//         </Modal>
//       </div>
//     );
//   }
// }
//TODO:  Delete Later--TO Here 1--Being used to study code--Joy
//**************************************************************