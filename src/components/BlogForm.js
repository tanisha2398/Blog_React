import React from "react";
import moment from "moment";
import { storage } from "../firebase/firebase";
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
      imgUrl: props.blog ? props.blog.imgUrl : "",
      url: props.blog ? props.blog.url : "",
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
  fileSelectedHandler = e => {
    const imgUrl = e.target.files[0];
    this.setState(() => ({
      imgUrl
    }));
  };
  onSubmit = e => {
    e.preventDefault();
    if (!this.state.title || !this.state.body) {
      this.setState(() => ({
        error: "Please provide title and body for blog"
      }));
    } else {
      this.setState(() => ({ error: "" }));
      const { imgUrl } = this.state;
      const uploadTask = storage.ref(`images/${imgUrl.name}`).put(imgUrl);
      uploadTask.on(
        "state_changed",
        snapshot => {},
        error => {
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            .child(imgUrl.name)
            .getDownloadURL()
            .then(url => {
              console.log(url);
              this.setState(() => ({ url: url }));
            });
        }
      );
      this.props.onSubmit({
        title: this.state.title,
        body: this.state.body,
        createdAt: this.state.createdAt.valueOf(),
        imgUrl: this.state.imgUrl,
        url: this.state.url
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
          <input type="file" onChange={this.fileSelectedHandler} />
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
