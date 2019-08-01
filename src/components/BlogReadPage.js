import React from "react";
import { connect } from "react-redux";
export const BlogReadPage = props => {
  console.log(props);
  return (
    <div>
      <h1>{props.blog.title}</h1>
      <p>{props.blog.createdAt}</p>
      <p>{props.blog.body}</p>
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

export default connect(mapStateToProps)(BlogReadPage);
