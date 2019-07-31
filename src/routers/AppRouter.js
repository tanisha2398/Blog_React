import React from "react";

import createHistory from "history/createBrowserHistory";
import Header from "../components/Header";
import DashboardPage from "../components/DashboardPage";
import NotFoundPage from "../components/NotFoundPage";
import BlogAddPage from "../components/BlogAddPage";
import BlogReadPage from "../components/BlogReadPage";
import BlogEditPage from "../components/BlogEditPage";
import {
  BrowserRouter,
  Router,
  Route,
  Switch,
  Link,
  NavLink
} from "react-router-dom";
import LoginPage from "../components/LoginPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

// export const history = createHistory();

// const AppRouter = () => (
//   <Router history={history}>
//     <div>
//       <Switch>
//         <PublicRoute path="/" component={LoginPage} exact={true} />
//         <PrivateRoute path="/dashboard" component={DashboardPage} />
//         <PrivateRoute path="/create" component={BlogCreatePage} />
//         <PrivateRoute path="/edit/:id" component={BlogEditPage} />
//         <PublicRoute path="/read/:id" component={BlogReadPage} />
//         <Route component={NotFoundPage} />
//       </Switch>
//     </div>
//   </Router>
// );

// export default AppRouter;

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/dashboard" component={DashboardPage} exact={true} />
        <Route path="/create" component={BlogAddPage} />
        <Route path="/edit/:id" component={BlogEditPage} />
        <Route path="/read/:id" component={BlogReadPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
