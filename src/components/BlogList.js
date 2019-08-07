import React from "react";
import { connect } from "react-redux";
import BlogListItem from "./BlogListItem";
import selectBlog from "../selectors/blogs";
const BlogList = props => {
  console.log(props);
  return (
    <div className="content-container">
      {props.blogs.length === 0 ? (
        <span>No Blogs</span>
      ) : (
        props.blogs.map(blog => <BlogListItem key={blog.id} {...blog} />)
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    blogs: selectBlog(state.blogs, state.filters)
  };
};
export default connect(mapStateToProps)(BlogList);
