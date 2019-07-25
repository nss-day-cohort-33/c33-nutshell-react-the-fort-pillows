import React, { Component } from "react";
import { Feed, Input, Message, FeedSummary, Button, Icon, Dropdown, Confirm } from 'semantic-ui-react'
import MessageEditForm from "./MessageEditForm";
import "./messages.css"

export default class MessageCardNo extends Component {
    render() {
        return (
            <div>
                {/* <input type="text" hidden={!this.state.hidden}></input> */}
                <div className="align"> <div>{this.props.users
                    .filter(user => user.id === this.props.message.userId)
                    .map(user =>
                        <strong key={user.id}>{user.username}</strong>)}: {this.props.message.message}</div>
                </div>
            </div>
        )
    }
}
