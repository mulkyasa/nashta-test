import React, { Component } from "react";

export default class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "",
      imagePreviewUrl: "",
    };
  }

  handleImageChange = (event) => {
    event.preventDefault();

    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      this.setState(
        {
          file: file,
          imagePreviewUrl: reader.result,
        },
        () => this.props.getURL(this.state.imagePreviewUrl)
      );
    };
    reader.readAsDataURL(file);
  };

  render() {
    // let { imagePreviewUrl } = this.state;
    // let imagePreview = null;
    // if (imagePreviewUrl) {
    //   imagePreview = <img style={{ width: '7rem' }} src={imagePreviewUrl} />;
    // }

    return (
      <div className="form-group custom-file mb-3">
        <input
          type="file"
          name="file"
          className="form-control custom-file-input"
          id="customFile"
          alt="Select file"
          onChange={this.handleImageChange}
        />
        <label className="custom-file-label" htmlFor="customFile">
          {this.state.file !== '' ? this.state.file.name : 'Choose file'}
        </label>
      </div>
    );
  }
}
