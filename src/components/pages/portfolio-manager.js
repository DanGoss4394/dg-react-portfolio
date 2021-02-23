import React, { Component } from "react";
import axios from "axios";

import PortfolioItem from "../portfolio/portfolio-item";
import PortfolioSidebarList from "../portfolio/portfolio-sidebar-list";

export default class PortfolioManager extends Component {
  constructor() {
    super();

    this.state = {
      portfolioItems: [],
    };
  }
  getPortfolioItems() {
    axios
      .get("https://dsgoose.devcamp.space/portfolio/portfolio_items", {
        withCredentials: true,
      })
      .then((response) => {
        this.setState({
          portfolioItems: [...response.data.portfolio_items]
          // portfolioItems: response.data.portfolio_items
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  portfolioItems() {
    return this.state.data.map((item) => {
      return <PortfolioItem key={item.id} item={item} />;
    });
  }

  componentDidMount() {
    this.getPortfolioItems();
  }

  render() {
    return (
      <div className="portfolio-manager-wrapper">
        <div className="left-column">
          <h1>Portfolio Manager</h1>
        </div>
        <div className="right-column">
          <PortfolioSidebarList data={this.state.portfolioItems}/>
        </div>
      </div>
    );
  }
}
