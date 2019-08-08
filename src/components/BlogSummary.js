import React from "react";
import { connect } from "react-redux";
import hidden_blogs from "../selectors/hidden_blogs";
import selectBlogs from "../selectors/blogs";

const BlogSummary = ({ blogCount, hiddenBlog }) => {
  return (
    <div className="page-header">
      <div className="content-container">
        <h1>
          Never miss an article about web development, JavaScript and
          self-growth.
        </h1>
        <h1 className="page-header__title">
          You are viewing {blogCount} blog out .Hidden blogs are {hiddenBlog - blogCount}.
        </h1>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const visibleBlog = selectBlogs(state.blogs, state.filters);

  return {
    blogCount: visibleBlog.length,
    hiddenBlog: hidden_blogs(state.blogs)
  };
};

export default connect(mapStateToProps)(BlogSummary);
