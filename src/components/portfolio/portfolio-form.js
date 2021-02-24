import React, { Component } from "react";

export default class PortfolioForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      category: "",
      position: "",
      url: "",
      thumb_image: "",
      banner_image: "",
      logo_image: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  buildForm() {
    let formData = new FormData();

    formData.append("protfolio_item[name]", this.state.name);
    formData.append("protfolio_item[description]", this.state.description);
    formData.append("protfolio_item[url]", this.state.url);
    formData.append("protfolio_item[category]", this.state.category);
    formData.append("protfolio_item[position]", this.state.position);
    
    return formData;
  }

  handleSubmit(event) {
    this.buildForm();
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <h1>Form</h1>

        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Portfolio Item Name"
              value={this.state.name}
              onChange={this.handleChange}
            />

            <input
              type="text"
              name="url"
              placeholder="URL"
              value={this.state.url}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="position"
              placeholder="Position"
              value={this.state.position}
              onChange={this.handleChange}
            />

            <input
              type="text"
              name="category"
              placeholder="Category"
              value={this.state.category}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    );
  }
}
