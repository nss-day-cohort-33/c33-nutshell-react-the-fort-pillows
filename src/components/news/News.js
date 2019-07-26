import React, { Component } from "react";
import NewsCard from "./NewsCard";
import "./news.css";
import NewsForm from "./NewsForm";
export default class News extends Component {


  render() {
    return (
      <React.Fragment>
        <div className="news-header">
          <h1>News Archive</h1>
          <NewsForm currentUser={this.props.currentUser} addNews={this.props.addNews} {...this.props} />
        </div>
        <div className="card-container">
            {this.props.news.filter(news => news.userId === parseInt(sessionStorage.getItem("id"))).map(news => (
             
              
              <NewsCard key={news.id} currentUser={this.props.currentUser} news={news} deleteNews={this.props.deleteNews} updateNews={this.props.updateNews} />
              
            ))}
        </div>
      </React.Fragment>
    );
  }
}
