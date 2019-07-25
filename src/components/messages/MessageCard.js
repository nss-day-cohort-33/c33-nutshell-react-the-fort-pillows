import React, { Component } from "react";
import { Feed, Input, Message, FeedSummary, Button, Icon, Dropdown, Confirm } from 'semantic-ui-react'


export default class MessageCard extends Component {

    state = {
        hidden: false,
        open:false
    }

    handleEditClick = () => {
        // preventDefault();
        this.setState({hidden:!this.state.hidden})
    }

    open = () => this.setState({ open: true })
    close = () => this.setState({ open: false })



    render() {
        return (
            <div>
                <input type="text" hidden={!this.state.hidden}></input>
                <div hidden={this.state.hidden}> {this.props.users
                                                    .filter(user => user.id === this.props.message.userId)
                                                    .map(user =>
                                                    <strong key={user.id}>{user.username}</strong>)}: {this.props.message.message}
                    <Dropdown icon="list" direction="right">
                        <Dropdown.Menu position="right">
                            <Dropdown.Item icon="pencil" description="Edit" onClick={this.handleEditClick} />
                            <Dropdown.Item icon="trash alternate" description="Delete" onClick={this.open} />
                            <Confirm open={this.state.open} onCancel={this.close} onConfirm={() => this.props.deleteMessage("messages", this.props.message.id)} />
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        )
    }
}