import React, { Component } from 'react'
import { Feed, Input, Message, FeedSummary, Button, Icon } from 'semantic-ui-react'

export default class Messages extends Component {
    state = {
        userId: "",
        message: ""
    }


    FeedExampleEventsProp = (events) => <Feed events={events} />

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }
    //TODO: how is userId passed in?
    handleKeyPress = evt => {
        evt.preventDefault()
        if (evt.key === "Enter") {
            console.log("you pressed enter")
            const message = {
                userId: this.state.userId,
                message: this.state.message
            }
            console.log("state change", message)
            this.props.addMessage(message)
            // .then(() => this.props.history.push("/"))
        }
    }
    //TODO: how is userId passed in?
    handleClick = evt => {
        evt.preventDefault()
        console.log("you clicked")
        const message = {
            userId: this.state.userId,
            message: this.state.message
        }
        console.log("state change", message)
        this.props.addMessage(message)
        // .then(() => this.props.history.push("/"))
    }



    // this.FeedExampleEventsProp(this.props.messages)
    render() {
        return (
            <React.Fragment>

                <div className="ui padded grid">
                    <Message >
                        <Feed>
                            <FeedSummary>
                                {
                                    this.props.messages.map(message =>
                                        <div key={message.id}>
                                            {message.user.username}: {message.message}
                                        </div>
                                    )
                                }
                            </FeedSummary>
                        </Feed>
                        <div>
                            <form>
                                <Input
                                    id="message"
                                    type="text"
                                    autoFocus
                                    placeholder="Got something to say?"
                                    onKeyDown={this.handleKeyPress}
                                    onChange={this.handleFieldChange}>
                                </Input>
                                <Button
                                    icon
                                    onClick={this.handleclick}
                                >
                                    <Icon name="chat"></Icon>
                                </Button>
                            </form>

                        </div>
                    </Message>
                </div>
            </React.Fragment>
        )
    }
}

// onKeyUp={this.handleKeyPress}>