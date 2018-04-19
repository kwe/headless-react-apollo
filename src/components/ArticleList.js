import React, { Component } from "react";
import Article from "./Article";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class ArticleList extends Component {
  render() {
    // 1
    if (this.props.articleQuery && this.props.articleQuery.loading) {
      return <div>Loading</div>;
    }

    // 2
    if (this.props.articleQuery && this.props.articleQuery.error) {
      return <div>Error</div>;
    }

    // 3
    const articlesToRender = this.props.articleQuery.articles;

    return (
      <div>
        {articlesToRender.map(article => (
          <Article key={article.id} article={article} />
        ))}
      </div>
    );
  }
}

// 1
const FEED_QUERY = gql`
  # 2
  query articleQuery {
    articles {
      title
      id
    }
  }
`;

// 3
export default graphql(FEED_QUERY, { name: "articleQuery" })(ArticleList);
