import React from "react";
import { connect } from "react-redux";
import moment from 'moment';
export const BlogReadPage = props => {
  console.log(props);
  return (
    <div>
      <h1>{props.blog.title}</h1>
      <p>{moment(props.blog.createdAt).format('MMMM Do, YYYY')}</p>
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
