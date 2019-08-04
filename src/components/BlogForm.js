import React from "react";
import moment from "moment";
import { storage, database } from "../firebase/firebase";
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
      progress:0,
      error: ""
    };
    this.fileSelectedHandler=this.fileSelectedHandler.bind(this);
    this.handleUpload=this.handleUpload.bind(this);
  }

  async uploadTaskFunc(uploadTask, imgUrl) {
    await uploadTask.on(
      "state_changed",
      snapshot => {
        let percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(percent + "% done");
      },
      error => {
        console.log(error);
      },
      () => {
        // this.getUrlFromStorage(imgUrl);
        this.getUrlFromStorage(imgUrl);
      }
    );
  }

  async getUrlFromStorage(folder) {
    await storage
      .ref("images")
      .child(folder.name)
      .getDownloadURL()
      .then(url => {
        this.setState(() => ({ url }));
      
      
        // database.ref("users").push(url);
      });
  }
  async percentage(a) {
    const percent = await ((a.bytesTransferred / a.totalBytes) * 100);
    return percent;
  }
  // async storeUrlInDatabase(url) {
  //   await database.ref(`users/${uid}/blogs`).push(url);
  // }
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
  handleUpload=()=>{
    const {imgUrl}=this.state;
    const uploadTask = storage.ref(`images/${imgUrl.name}`).put(imgUrl);
    uploadTask.on(
      "state_changed",
      snapshot => {
        let progress =Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        console.log(progress + "% done");
        this.setState({progress})
      },
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
        this.setState(() => ({ url }));
      
      
        
      });
      }
    );

  }
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
        <progress value={this.state.progress} max="100"/>
        <br/>
        <input type="file" onChange={this.fileSelectedHandler} />
          <button onClick={this.handleUpload}>Upload</button>
          <br/>
          <img src={this.state.url || 'https://via.placeholder.com/400x300'} alt="Uploaded image" height="300" width="400"/>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Title"
            autoFocus
            value={this.state.title}
            onChange={this.onTitleChange}
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
