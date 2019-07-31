import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";

const now = moment();

export default class BlogForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.blog ? props.blog.title : "",
      body: props.blog ? props.blog.body : "",
      createdAt: props.blog ? moment(props.blog.createdAt) : moment(),
      calendarFocused: false,
      error: ""
    };
  }

  onBodyChange = e => {
    const body = e.target.value;
    this.setState(() => ({ body }));
  };
  onTitleChange = e => {
    const title = e.target.value;
    this.setState(() => ({
      title
    }));
  };
  onDateChange = createdAt => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = e => {
    e.preventDefault();
    if (!this.state.title || !this.state.body) {
      this.setState(() => ({
        error: "Please provide title and body for blog"
      }));
    } else {
      this.setState(() => ({ error: "" }));
      this.props.onSubmit({
        title: this.state.title,
        body: this.state.body,
        createdAt: this.state.createdAt.valueOf()
      });
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Title"
            autoFocus
            value={this.state.title}
            onChange={this.onTitleChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder="Blog Body"
            value={this.state.body}
            onChange={this.onBodyChange}
          />
          <button>Add Blog</button>
        </form>
      </div>
    );
  }
}
