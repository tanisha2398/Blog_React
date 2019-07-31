import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import authReducer from "../reducers/auth";
import blogReducer from "../reducers/blogs";
import filterReducer from "../reducers/filters";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  //store creation
  const store = createStore(
    combineReducers({
      blogs: blogReducer,
      filters: filterReducer,
      auth: authReducer
    }),
    composeEnhancer(applyMiddleware(thunk))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
