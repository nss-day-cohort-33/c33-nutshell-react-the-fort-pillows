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
          <NewsForm addNews={this.props.addNews} {...this.props} />
        </div>
        <div className="card-container">
            {this.props.news.map(news => (
             
              
              <NewsCard key={news.id} news={news} deleteNews={this.props.deleteNews} updateNews={this.props.updateNews} />
              
            ))}
        </div>
      </React.Fragment>
    );
  }
}
