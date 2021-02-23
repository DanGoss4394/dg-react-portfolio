import React from "react";

const PortfolioSidebarList = (props) => {
  const portfolioList = props.data.map((portfolioItem) => {
    return (
      <div>
        <div>
          <img src={portfolioItem.thumb_image_url} />
        </div>
        <h1>{portfolioItem.id}</h1>
        <h2>{portfolioItem.name}</h2>
      </div>
    );
  });

  return <div>{portfolioList}</div>;
};
export default PortfolioSidebarList;
