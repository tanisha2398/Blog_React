import React from "react";
import moment from "moment";

import { Link } from "react-router-dom";

const BlogListItem = ({ id, createdAt, title, body }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{title}</h3>
    </Link>

    <p>{body}</p>
    <p>{moment(createdAt).format('MMMM Do, YYYY')}</p>
  </div>
);

export default BlogListItem;
