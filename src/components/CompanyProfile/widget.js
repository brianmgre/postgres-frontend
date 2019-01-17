import React, { Component } from "react";
import { render } from "react-dom";
import { CloudinaryContext, Transformation, Image } from "cloudinary-react";

const CLOUD_API = process.env.REACT_APP_API;
const PRESET = process.env.REACT_APP_PRESET;
const CLOUD_NAME = process.env.REACT_APP_CLOUD_NAME;

class CloudinaryF extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profilePic: [],
      profileString: ""
    };
  }

  setUrl() {
    console.log(this.state.profilePic[0].url);
  }
  uploadWidget() {
    let _this = this;
    window.cloudinary.openUploadWidget(
      { cloud_name: "dg9vhfqmb", upload_preset: "dzsxr7v2" },
      function(error, result) {
        console.log(result);
        if (result) {
          _this.setState({ profilePic: _this.state.profilePic.concat(result) });
          _this.setUrl();
        } else {
          console.log(error);
        }
      }
    );
  }
  render() {
    console.log(this.state.profileString);
    return (
      <div className="main">
        <h1>Galleria</h1>
        <div className="upload">
          <button
            onClick={this.uploadWidget.bind(this)}
            className="upload-button"
          >
            Add Image
          </button>
        </div>
        {this.state.profilePic.length > 0 ? (
          <img src={this.state.profilePic[0].url} />
        ) : null}
      </div>
    );
  }
}

export default CloudinaryF;
