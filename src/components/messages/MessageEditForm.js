import React, {Component} from 'react'
import { Dropdown, Button, Icon, Input } from 'semantic-ui-react'
import API from '../../module/API';


export default class MessageEditForm extends Component {

state = {
    userId: "",
    message: "",
    id:""
}


state = {
    hidden: false
}

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    //this updates the existing messsage by making a put request to the database
    updateExistingMessage = evt => {
        evt.preventDefault()
        if (this.state.message === "") {
            console.log('it clicks!')
          window.alert("Please update message or delete");
        } else {
          const editedMessage = {
            userId: 2,
            message: this.state.message,
            id: this.props.message.id,
          };
      this.props.updateMessage(editedMessage)
      this.props.handleEditClick()
      }
    }

    componentDidMount() {
        API.get("messages", this.props.message.id)
        .then(message => {
          this.setState({
            userId: 2,
            message: message.message,
            id: this.props.message.id
          });
        });
      }


    render() {
        // let value = this.state.message
        return (
            <div hidden={!this.props.hidden}>
        <Input type="text" value={this.state.message} id="message"  onChange={this.handleFieldChange}></Input>
        <Button icon onClick={this.props.handleEditClick}><Icon name="cancel" /></Button>
        <Button icon onClick={this.updateExistingMessage}><Icon name ="check"/></Button>
        </div>
    )
}

}
