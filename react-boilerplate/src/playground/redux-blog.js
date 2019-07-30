import { createStore, combineReducers } from "redux";
import uuid from "uuid";
const addBlog = ({ title = "", body = "" } = {}) => ({
  type: "ADD_BLOG",
  blog: {
    id: uuid(),
    title,
    body
  }
});
const removeBlog = ({ id } = {}) => ({
  type: "REMOVE_BLOG",
  id
});

const editBlog = (id, updates) => ({
  type: "EDIT_BLOG",
  id,
  updates
});

const setTextFilter = (text = "") => ({
  type: "SET_TEXT",
  text
});

const blogReducerDefaultState = [];
const blogReducer = (state = blogReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_BLOG":
      return [...state, action.blog];
    case "REMOVE_BLOG":
      return state.filter(({ id }) => {
        return id !== action.id;
      });
    case "EDIT_BLOG":
      return state.map(blog => {
        if (blog.id === action.id) {
          return {
            ...blog,
            ...action.updates
          };
        } else {
          return blog;
        }
      });

    default:
      return state;
  }
};

const filterReducerDefaultState = {
  text: "",
  sortBy: "title"
};
const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT":
      return {
        ...state,
        text: action.text
      };
    default:
      return state;
  }
};

const getVisibleBlog = (blogs, { text }) => {
  return blogs.filter(blog => {
    const textMatch = blog.title.toLowerCase().includes(text.toLowerCase());
    return textMatch;
  });
};

const store = createStore(
  combineReducers({
    blogs: blogReducer,
    filters: filterReducer
  })
);
store.subscribe(() => {
  const state = store.getState();
  const visibleBlog = getVisibleBlog(state.blogs, state.filters);
  console.log(visibleBlog);
});
const blogOne = store.dispatch(addBlog({ title: "dog", body: "love dog" }));
const blogTwo = store.dispatch(
  addBlog({ title: "cat dog", body: "love cat in white" })
);
// console.log(blogOne);
// store.dispatch(removeBlog({ id: blogOne.blog.id }));
// store.dispatch(editBlog(blogTwo.blog.id, { title: "flower" }));
store.dispatch(setTextFilter("dog"));
// store.dispatch(setTextFilter());
const demoState = {
  blogs: [
    {
      id: "ghjkjhgfh",
      title: "cat love",
      body: "love to play with cats"
    }
  ],
  filters: {
    text: "cat",
    sortBy: "title"
  }
};
