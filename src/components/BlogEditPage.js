import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import BlogForm from "./BlogForm";
import { startEditBlog, startRemoveBlog } from "../actions/blogs";
export const BlogEditPage = props => {
  console.log(props);
  return (
    <div>
      Blog Edit page content with id {props.match.params.id}
      <Link to={`/read/${props.match.params.id}`}>Read</Link>
      <BlogForm
        blog={props.blog}
        onSubmit={blog => {
          props.dispatch(startEditBlog(props.blog.id, blog));
          props.history.push("/dashboard");
        }}
      />
      <div className="content-container">
        <button
          className="button"
          onClick={() => {
            props.dispatch(startRemoveBlog({ id: props.blog.id }));
            props.history.push("/dashboard");
          }}
        >
          Remove
        </button>
      </div>
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
