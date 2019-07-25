import React, { Component } from "react";
import { Card, Icon, Confirm, Button } from "semantic-ui-react";
import NewsEditForm from "./NewsEditForm"

// console.log(this.props.news)

const cardSize = {
  width: "25em"
};


export default class NewsCard extends Component {
  //--For Confirmation Box--//
  state = { open: false };

  //--For Confirmation Box--//
  open = () => this.setState({ open: true });
  close = () => this.setState({ open: false });

 
  render() {
    return (
      <div key={this.props.news.id}>
       
        <Card raised className="large-text card-margin" style={cardSize}>
          <Card.Content className="card-margin">
            <Card.Header>{this.props.news.title}</Card.Header>
            <Card.Meta>{this.props.news.time}</Card.Meta>
            <br />
            <Card.Description>{this.props.news.synopsis}</Card.Description>
            <br />
            <Card.Content extra>
              <Icon name="linkify" />
              <a href={this.props.news.url} target="_blank">Link</a>
            </Card.Content>
            <br />
            <Card.Content>
              <div className="format-buttons">
                {/* Had to pass newsId to edit form as match.params only works if id is in path... Modal doesn't need a path... */}
                <NewsEditForm newsId={this.props.news.id} updateNews={this.props.updateNews} />
                {/* For Confirmation Box */}
                <Button icon="trash alternate" onClick={this.open} />
                <Confirm
                  open={this.state.open}
                  onCancel={this.close}
                  onConfirm={() =>
                    this.props.deleteNews("news", this.props.news.id)
                  }
                />
              </div>
            </Card.Content>
          </Card.Content>
        </Card>
      </div>
    );
  }
}


