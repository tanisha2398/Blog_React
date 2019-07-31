import React from "react";
import { connect } from "react-redux";
import BlogForm from "./BlogForm";
import { startAddBlog } from "../actions/blogs";

export class BlogAddPage extends React.Component {
  onSubmit = blog => {
    this.props.startAddBlog(blog);
    this.props.history.push("/dashboard");
  };
  render() {
    return (
      <div>
        <BlogForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  startAddBlog: blog => dispatch(startAddBlog(blog))
});
export default connect(
  undefined,
  mapDispatchToProps
)(BlogAddPage);
