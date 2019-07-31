import database from "../firebase/firebase";
import uuid from "uuid";
export const addBlog = blog => ({
  type: "ADD_BLOG",
  blog
});

export const startAddBlog = (blogData = {}) => {
  return dispatch => {
    const { title = "", body = "", createdAt = 0 } = blogData;
    const blog = { title, body, createdAt };
    database
      .ref("blogs")
      .push(blog)
      .then(ref => {
        dispatch(
          addBlog({
            id: ref.key,
            ...blog
          })
        );
      });
  };
};

export const removeBlog = ({ id } = {}) => ({
  type: "REMOVE_BLOG",
  id
});

export const editBlog = (id, updates) => ({
  type: "EDIT_BLOG",
  id,
  updates
});

export const setBlogs = blogs => ({
  type: "SET_BLOGS",
  blogs
});

export const startSetBlogs = () => {
  return dispatch => {
    return database
      .ref("blogs")
      .once("value")
      .then(snapshot => {
        const blogs = [];
        snapshot.forEach(childSnapshot => {
          blogs.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        dispatch(setBlogs(blogs));
      });
  };
};
