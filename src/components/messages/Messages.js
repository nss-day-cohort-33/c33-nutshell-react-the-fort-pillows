import React, { Component } from 'react'
import { Feed, Input, Message, FeedSummary, Button, Icon, Dropdown, Confirm } from 'semantic-ui-react'

export default class Messages extends Component {
    state = {
        userId: 2,
        message: "",
    }

    open = () => this.setState({ open: true })
    close = () => this.setState({ open: false })

    FeedExampleEventsProp = (events) => <Feed events={events} />

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

    state = {
        hidden: false,
    }

    handleEditClick = (id) => {
        // preventDefault();
        this.setState({hidden:!this.state.hidden})
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
                                            <input type="text" hidden={!this.state.hidden}></input>
                                            <div hidden={this.state.hidden}> {message.user.username}: {message.message}
                                                <Dropdown icon="list" direction="right">
                                                    <Dropdown.Menu position="right">
                                                        <Dropdown.Item icon="pencil" description="Edit" onClick={this.handleEditClick} />
                                                        <Dropdown.Item icon="trash alternate" description="Delete"
                                                            onClick={this.open} />
                                                        <Confirm open={this.state.open} onCancel={this.close} onConfirm={() => this.props.deleteMessage("messages", message.id)} />
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                    )
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