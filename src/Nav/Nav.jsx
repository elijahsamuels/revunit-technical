import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import SearchByAuthor from "../Search/SearchByAuthor"

function Nav() {
  return (
    <div className="nav">
      <Link to="posts" className="link">Posts</Link>
      <Link to="albums" className="link">Albums</Link>

			<SearchByAuthor />
    </div>
  );
}

export default Nav;
