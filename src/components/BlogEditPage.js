import React from "react";
import { connect } from "react-redux";
import BlogForm from "./BlogForm";
import { editBlog, startRemoveBlog } from "../actions/blogs";
export const BlogEditPage = props => {
  console.log(props);
  return (
    <div>
      Blog Edit page content with id {props.match.params.id}
      <BlogForm
        blog={props.blog}
        onSubmit={blog => {
          props.dispatch(editBlog(props.blog.id, blog));
          props.history.push("/dashboard");
        }}
      />
      <button
        onClick={() => {
          props.dispatch(startRemoveBlog({ id: props.blog.id }));
          props.history.push("/dashboard");
        }}
      >
        Remove
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    blog: state.blogs.find(blog => {
      return blog.id === props.match.params.id;
    })
  };
};

export default connect(mapStateToProps)(BlogEditPage);
