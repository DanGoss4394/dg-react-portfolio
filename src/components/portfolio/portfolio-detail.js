import axios from "axios";
import React, { Component } from "react";

export default class PortfolioDetail extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.getPortfolioItem();
  }

  getPortfolioItem() {
    axios
      .get(
        `https://dsgoose.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`,
        { withCredentials: true }
      )
      .then((response) => {
        console.log("res", response);
      })
      .catch((error) => {
        console.log("getportfolioitem error", error);
      });
  }
  render() {
    return (
      <div>
        <h2>Portfolio Details for {this.props.match.params.slug}</h2>
      </div>
    );
  }
}
