import React from "react";
import { Link } from "react-router-dom";
export const NotFoundPage = () => (
  <div>
    404-<Link to="/dashboard">Go Home</Link>
  </div>
);
export default NotFoundPage;
