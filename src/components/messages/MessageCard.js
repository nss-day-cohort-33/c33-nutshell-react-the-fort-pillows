import React, { Component } from "react";
import { Feed, Input, Message, FeedSummary, Button, Icon, Dropdown, Confirm } from 'semantic-ui-react'
import MessageEditForm from "./MessageEditForm";
import "./messages.css"


export default class MessageCard extends Component {

    state = {
        hidden: false,
        open: false
    }

    //bp- this function toggles the hidden features for the edit button.  This hides the message div and unhides the input field and vice versa
    handleEditClick = () => {
        this.setState({ hidden: !this.state.hidden })
        console.log("it works!")
    }

// bp- this toggles the confirm for the modal form
    open = () => this.setState({ open: true })
    close = () => this.setState({ open: false })

// bp - need to call sessionStorage in order to have it available when called
    render() {
        let session = parseInt(sessionStorage.getItem("id"))
        return (
            <div>
                <MessageEditForm {...this.props} hidden={this.state.hidden} handleEditClick={this.handleEditClick} updateMesage={this.props.updateMessage}
                    messsage={this.props.messsage} />
                {/* <input type="text" hidden={!this.state.hidden}></input> */}
                <div className="align" hidden={this.state.hidden}> <div>{this.props.users
                    .filter(user => user.id === this.props.message.userId)
                    .map(user =>
                        <strong key={user.id}>{user.username}</strong>)}: {this.props.message.message}</div>
                        {
                            this.props.message.userId === session ?
                            <Dropdown icon="list" direction="right">
                        <Dropdown.Menu position="right">
                            <Dropdown.Item icon="pencil" description="Edit" onClick={this.handleEditClick} value={this.props.message.message} />
                            <Dropdown.Item icon="trash alternate" description="Delete" onClick={this.open} />
                            <Confirm open={this.state.open} onCancel={this.close} onConfirm={() => this.props.deleteMessage("messages", this.props.message.id)} />
                        </Dropdown.Menu>
                    </Dropdown> : ""

                        }
                    {/* <Dropdown icon="list" direction="right">
                        <Dropdown.Menu position="right">
                            <Dropdown.Item icon="pencil" description="Edit" onClick={this.handleEditClick} value={this.props.message.message} />
                            <Dropdown.Item icon="trash alternate" description="Delete" onClick={this.open} />
                            <Confirm open={this.state.open} onCancel={this.close} onConfirm={() => this.props.deleteMessage("messages", this.props.message.id)} />
                        </Dropdown.Menu>
                    </Dropdown> */}
                </div>
            </div>
        )
    }
}
