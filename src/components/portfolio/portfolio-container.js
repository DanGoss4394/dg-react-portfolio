import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  // State
  // Lifecycle hooks
  constructor() {
    super();
    console.log("Portfolio containter has rendered");
  }

  portfolioItems() {
    const data = ["Quip", "Eventbrite", "Ministry Safe", "SwingAway"];

    return data.map((item) => {
      return <PortfolioItem title={item} url={"google.com"} />;
    });
  }

  render() {
    return (
      <div>
        <h2>Portfolio items go here..</h2>
        {this.portfolioItems()}
      </div>
    );
  }
}
