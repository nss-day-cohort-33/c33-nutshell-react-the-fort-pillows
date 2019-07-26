import React, { Component } from 'react'
import { Feed, Input, Message, FeedSummary, Button, Icon, Dropdown, Confirm } from 'semantic-ui-react'
import MessageCard from './MessageCard';
import './messages.css'

export default class Messages extends Component {
    state = {
        userId: 2,
        message: "",
    }

// bp-this takes the field changes for the add meesage field
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

// bp- function to add the new post and posts to the database
    handleClick = evt => {
        console.log("you clicked")
        evt.preventDefault();
        const message = {
            userId: this.state.userId,
            message: this.state.message
        };
        this.props.addMessage(message)

    }


    render() {
        return (
            <React.Fragment>
                <div className="messageBox">
                    <Message floating>
                        <Feed className="max" maxline={5}>
                            <FeedSummary>
                                {
                                    this.props.messages.map(message =>
                                     <div key={message.id} >
                                        <MessageCard className="card" message={message} {...this.props} />
                                        </div>
                                     /* message.userId === session ? */
                                        /* : */
                                            /* <div key={message.id}>
                                                <MessageCardNo message={message} {...this.props} />
                                            </div> */
                                    )}
                            </FeedSummary>
                        </Feed>
                        <div>
                            <Input
                                id="message"
                                type="text"
                                autoFocus
                                placeholder="Got something to say?"
                                onChange={this.handleFieldChange}
                            >
                            </Input>
                            <Button
                                icon
                                type="submit"
                                onClick={this.handleClick}>
                                <Icon name="chat"></Icon>
                            </Button>

                        </div>
                    </Message>
                </div>
            </React.Fragment>
        )
    }
}

// onKeyUp={this.handleKeyPress}>