import React, { Component } from "react";
import apollofetch from "../utils/fetch";
import { withRouter } from "react-router";

const query = `
    query GetPost($id:ID!) {
        Post(id:$id) {
            title
            body
            user {
              name
            }
            
        }
    }
`;

class Post extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    debugger;
    const variables = { id: this.props.match.params.id };
    apollofetch({ query, variables })
      .then(data => {
        this.setState({ data: data.data });
      })
      .catch(e => console.error(e));
  }
  render() {
    return <div>Post</div>;
  }
}

export default withRouter(Post);
