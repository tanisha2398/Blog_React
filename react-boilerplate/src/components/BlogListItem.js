import React from "react";

import { Link } from "react-router-dom";

const BlogListItem = ({ id, createdAt, title, body }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{title}</h3>
    </Link>

    <p>{body}</p>
    <p>{createdAt}</p>
  </div>
);

export default BlogListItem;
