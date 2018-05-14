import React, { Component } from "react";
import apollofetch from "../utils/fetch";

const query = `
    query AllPosts {
        allPosts {
            id
            title
            body
        }
    }
`;

export default class Home extends Component {
  constructor(props) {
    super(props);
    // InitialState
    this.state = { data: { allPosts: [] } };
  }
  componentDidMount() {
    apollofetch({ query })
      .then(data => {
        this.setState({ data: data.data });
      })
      .catch(e => console.error(e));
  }
  render() {
    const { allPosts } = this.state.data;
    return (
      <div>
        {allPosts.map((post, idx) => (
          <article key={idx} className={"p-3 "}>
            <a href={`/post/${post.id}`}>
              <h1>{post.title}</h1>
            </a>
            <p>{post.body}</p>
          </article>
        ))}
      </div>
    );
  }
}
