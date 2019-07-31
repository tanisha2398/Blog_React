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
