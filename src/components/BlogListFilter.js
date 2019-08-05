import React from "react";
import { connect } from "react-redux";
import { setTextFilter, searchByTitle, searchByHead } from "../actions/filters";
const BlogListFilter = props => (
  <div>
    <input
      type="text"
      value={props.filters.text}
      onChange={e => {
        props.dispatch(setTextFilter(e.target.value));
      }}
    />
    <select
      className="select"
      value={props.filters.searchBy}
      onChange={e => {
        if (e.target.value === "title") {
          props.dispatch(searchByTitle());
        } else if (e.target.value === "head") {
          props.dispatch(searchByHead());
        }
      }}
    >
      <option value="title">Title</option>
      <option value="head">Heading</option>
    </select>
  </div>
);

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(BlogListFilter);
