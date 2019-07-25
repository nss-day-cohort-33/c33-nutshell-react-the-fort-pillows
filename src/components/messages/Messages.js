import React, { Component } from 'react'
import { Feed, Input, Message, FeedSummary, Button, Icon, Dropdown, Confirm } from 'semantic-ui-react'
import MessageCard from './MessageCard';

export default class Messages extends Component {
    state = {
        userId: 2,
        message: "",
    }

    // FeedExampleEventsProp = (events) => <Feed events={events} />

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }
    //TODO: how is userId passed in?
    handleClick = evt => {
        console.log("you clicked")
        evt.preventDefault();
        const message = {
            userId: this.state.userId,
            message: this.state.message
        };
        this.props.addMessage(message)
    }


    // this.FeedExampleEventsProp(this.props.messages)
    render() {
        return (
            <React.Fragment>
                <div className="ui padded grid">
                    <Message floating>
                        <Feed>
                            <FeedSummary>
                                {
                                    this.props.messages.map(message =>
                                    <div key={message.id}>
                                        <MessageCard message={message} {...this.props} />
                                    </div>)
                                }
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