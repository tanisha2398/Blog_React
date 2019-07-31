import React from "react";
import { connect } from "react-redux";
import hidden_blogs from "../selectors/hidden_blogs";
import selectBlogs from "../selectors/blogs";

const BlogSummary = ({ blogCount, hiddenBlog }) => {
  return (
    <div>
      <h1>
        viewing {blogCount} hidden are {hiddenBlog - blogCount}
      </h1>
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
