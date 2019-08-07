import React from "react";
import { connect } from "react-redux";
import moment from "moment";
export const BlogReadPage = props => {
  console.log(props);
  return (
    <div className="content-container content-container-center">
      <h1>{props.blog.title}</h1>
      <div>
        {props.blog.url && (
          <img
            src={props.blog.url}
            alt="Uploaded image"
            height="400"
            width="400"
          />
        )}
      </div>
      <p>{moment(props.blog.createdAt).format("MMMM Do, YYYY")}</p>
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
