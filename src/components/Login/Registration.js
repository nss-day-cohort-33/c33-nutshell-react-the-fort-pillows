
import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Link } from "react-router-dom"
import API from "../../module/API"

class RegistrationForm extends Component {

    state = {
        username: "",
        email: "",
        password: ""
    }

    //this handles the inputs field changes and pushes into the state
    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
        console.log("changes", stateToChange)
    }
    //this will need to be moved to applicationviews and passed down as a child
    addUser = user =>
    API.post("user", user)

    //this generates the new user and pushes to the database
    //FIXME: NEED TO ADD CODE FOR VERIFICATION
    constructNewUser = evt => {
        evt.preventDefault();
        if (this.state.username === "" || this.state.email ==="" || this.state.password ==="") {
          window.alert("Please fill out missing section");
        } else {
          const user = {
            name: (this.state.username),
            email: (this.state.email),
            password: (this.state.password)
        };
        console.log("user", user)

          // Create the animal and redirect user to animal list
          this.addUser(user)
            .then(() => sessionStorage.setItem(
                "credentials",
                JSON.stringify({
                    user: this.state.username,
                    email: this.state.email,
                    password: this.state.password
                 })
                 ))
            .then(() => this.props.history.push("/"));
        }
      };


    render() {
    return (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
     Register for an account
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' id="username" onChange={this.handleFieldChange} />
          <Form.Input fluid icon='envelope' iconPosition='left' placeholder='E-mail address' id="email" onChange={this.handleFieldChange} />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            id="password"
            onChange={this.handleFieldChange}
          />

          <Button color='teal' fluid size='large' type="submit"
            onClick={this.constructNewUser}
          >
            Register
          </Button>
        </Segment>
      </Form>
      <Message>
        Already a Member? <Link to={"/Login"}>Return to Login</Link>
      </Message>
    </Grid.Column>
  </Grid>
    )
    }
}

export default RegistrationForm