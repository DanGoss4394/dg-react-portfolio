import React from "react";
import { Link } from "react-router-dom";

export default function (props) {
  //  data that we'll need:
  // - background img: thumb_image_url
  // - logo: logo_url
  // - description
  // - id: id

  const { id, description, thumb_image_url, logo_url } = props.item;
  return (
    <div>
      <div>{description}</div>
      <Link to={`/portfolio/${id}`}>Link</Link>
    </div>
  );
}
