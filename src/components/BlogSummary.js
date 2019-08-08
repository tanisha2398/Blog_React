import React from "react";
import { connect } from "react-redux";
import hidden_blogs from "../selectors/hidden_blogs";
import selectBlogs from "../selectors/blogs";

const BlogSummary = ({ blogCount, hiddenBlog }) => {
  return (
    <div className="page-header">
      <div className="content-container">
        <h2 className="page-header__title">
          Never miss an article about web development, JavaScript and
          self-growth.
        </h2>
        <br />
        <h4 className="page-header__title">
          You are viewing <span>{blogCount}</span> blog out .Hidden blogs are{" "}
          <span>{hiddenBlog - blogCount}</span>.
        </h4>
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
