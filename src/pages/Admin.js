import React, { Component } from "react";
import v4 from "uuid/v4";
import apollofetch from "../utils/fetch";
// import HomeQuery from "../queries/Home";
const query = `
mutation CreateNewPost($id: ID!, $title: String!, $body: String!, $user_id: ID!, $views:Int!){
    createPost(id: $id, title: $title, body: $body, user_id: $user_id, views:$views) {
 id
    }
  }
`;
export default class Admin extends Component {
  constructor(props) {
    super(props);
    // bind handler to this so we can use the references
    this.handleSubmit = this.handleSubmit.bind(this);

    // setup refrences to the inputs
    this.title = React.createRef();
    this.body = React.createRef();
    this.user = React.createRef();
  }
  handleSubmit(e) {
    e.preventDefault(); // prevent default submit
    debugger;
    const variables = {
      id: v4(), //generate uuid for new post
      title: this.title.current.value,
      body: this.body.current.value,
      user_id: this.title.current.value,
      views: 0
    };
    apollofetch({ query, variables })
      .then(data => console.log(data))
      .catch(e => console.error(e));
  }
  render() {
    return (
      <div>
        <form
          className={"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"}
          onSubmit={this.handleSubmit}
        >
          <div className="mb-4">
            <label
              className={"block text-grey-darker text-sm font-bold mb-2"}
              htmlFor={"new_post_title"}
            >
              Title:
            </label>
            <input
              ref={this.title}
              type="text"
              name="title"
              placeholder={"my fancy title"}
              id="new_post_title"
              className={
                "shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              }
            />
          </div>
          <label
            className={"block text-grey-darker text-sm font-bold mb-2"}
            htmlFor={"new_post_body"}
          >
            Body:
          </label>
          <textarea
            ref={this.body}
            name="body"
            id="new_post_body"
            placeholder={"this is where the content goes"}
            className={
              "shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            }
            cols="30"
            rows="10"
          />
          <label>
            <div className="inline-block relative w-64">
              <select
                ref={this.user}
                className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-4 py-2 pr-8 rounded shadow"
              >
                <option value={"1"}>Option 2</option>
                <option value={"2"}>Option 3</option>
              </select>
              <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </label>
          <br />
          <button
            className={
              "border block p-4 rounded hover:bg-grey-light mt-8 w-100"
            }
            type="submit"
          >
            New Post
          </button>
        </form>
      </div>
    );
  }
}
