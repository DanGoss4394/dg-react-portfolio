import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  // State
  // Lifecycle hooks
  constructor() {
    super();

    this.state = {
      pageTitle: "Welcome to my portfolio",
      isLoading: false,
      data: [
        { title: "Quip", catagory: "eCommerce", slug: "quip" },
        { title: "Eventbrite", catagory: "Scheduling", slug: "eventbrite" },
        {
          title: "Ministry Safe",
          catagory: "Enterprise",
          slug: "mintstry-safe",
        },
        { title: "SwingAway", catagory: "eCommerce", slug: "swingaway" },
      ],
    };
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(filter) {
    this.setState({
      data: this.state.data.filter((item) => {
        return item.catagory === filter;
      }),
    });
  }

  portfolioItems() {
    return this.state.data.map((item) => {
      return <PortfolioItem title={item.title} url={"google.com"} slug={item.slug} />;
    });
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h2>{this.state.pageTitle}</h2>

        <button onClick={() => this.handleFilter("eCommerce")}>
          eCommerce
        </button>
        <button onClick={() => this.handleFilter("Scheduling")}>
          Scheduling
        </button>
        <button onClick={() => this.handleFilter("Enterprise")}>
          Enterprise
        </button>

        {this.portfolioItems()}
      </div>
    );
  }
}