import React from "react";
import { connect } from "react-redux";
import BlogForm from "./BlogForm";
import { startAddBlog } from "../actions/blogs";
export const BlogAddPage = props => (
  <div className="content-container">
    <h1>Add blog</h1>
    <BlogForm
      onSubmit={blog => {
        props.dispatch(startAddBlog(blog));
        props.history.push("/dashboard");
      }}
    />
  </div>
);
export default connect()(BlogAddPage);
