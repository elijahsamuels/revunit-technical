import React from "react";
import { Link } from "react-router-dom";
import "./PostTile.css";

const titleCondenser = (string) => {
  let maxLength = 15;
  if (string.length > maxLength) {
    return string.slice(0, maxLength).concat("...");
  }
  return string;
};

const Posts = ({ props }) => {
  return (
    <div className={"item-parent"}>
			<Link to={`${props.id}` }>
				<div className={"item-title"}>
          {titleCondenser(props.title)}
				</div>
			</Link>
    </div>
  );
};

export default Posts;
