import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import AppRouter, { history } from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import LoadingPage from "./components/LoadingPage";
import { login, logout } from "./actions/auth";
import { addBlog } from "./actions/blogs";
import { setTextFilter } from "./actions/filters";
import getVisibleBlog from "./selectors/blogs";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";
import "./firebase/firebase";

const store = configureStore();

store.dispatch(addBlog({ title: "mat", body: "i love to do exercise on mat" }));
store.dispatch(
  addBlog({ title: "bat", body: "i love to play cricket", createdAt: 12334 })
);

const state = store.getState();
const visibleBlog = getVisibleBlog(state.blogs, state.filters);
console.log(visibleBlog);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById("app"));
// let hasRendered = false;
// const renderApp = () => {
//   if (!hasRendered) {
//     ReactDOM.render(jsx, document.getElementById("app"));
//     hasRendered = true;
//   }
// };

// ReactDOM.render(<LoadingPage />, document.getElementById("app"));

// firebase.auth().onAuthStateChanged(user => {
//   if (user) {
//     store.dispatch(login(user.uid));

//     renderApp();
//     if (history.location.pathname === "/") {
//       history.push("/dashboard");
//     }
//   } else {
//     store.dispatch(logout());
//     renderApp();
//     history.push("/");
//   }
// });
// ReactDOM.render(<AppRouter />, document.getElementById("app"));
