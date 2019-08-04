import React from "react";
import moment from "moment";

import { Link } from "react-router-dom";

const BlogListItem = ({ id, createdAt, title, body, url }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{title}</h3>
    </Link>

    <p>{body}</p>
    <p>{moment(createdAt).format("MMMM Do, YYYY")}</p>
    {url && <img src={url} alt="Uploaded image" height="300" width="400" />}
  </div>
);

export default BlogListItem;
