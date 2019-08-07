import React from "react";
import moment from "moment";

import { Link } from "react-router-dom";

const BlogListItem = ({ id, createdAt, title, body, url }) => (
  <Link className="list-item header__content" to={`/edit/${id}`}>
    <div>
      <h3 className="list-item__title">{title}</h3>

      <p className="list-item__sub-title">{body}</p>
      <p className="list-item__data">
        {moment(createdAt).format("MMMM Do, YYYY")}
      </p>
    </div>
    <div>
      {url && <img src={url} alt="Uploaded image" height="100" width="100" />}
    </div>
  </Link>
);

export default BlogListItem;
