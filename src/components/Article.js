import React, { Component } from "react";
import "../styles/Article.css";

class Article extends Component {
  render() {
    return (
      <div>
        <div className="rrticle"> {this.props.article.title} </div>{" "}
      </div>
    );
  }
}

export default Article;
