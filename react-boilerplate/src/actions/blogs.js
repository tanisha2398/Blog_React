import database from "../firebase/firebase";
import uuid from "uuid";
export const addBlog = ({ title = "", body = "", createdAt = 0 } = {}) => ({
  type: "ADD_BLOG",
  blog: {
    id: uuid(),
    title,
    body,
    createdAt
  }
});
export const removeBlog = ({ id } = {}) => ({
  type: "REMOVE_BLOG",
  id
});

export const editBlog = (id, updates) => ({
  type: "EDIT_BLOG",
  id,
  updates
});
