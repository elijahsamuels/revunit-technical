import React, { useState } from "react";
import PostIndex from "../Posts/PostIndex";

function SearchByAuthor() {
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(e.target.value);

    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${search}`)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        console.log(data);
      })
      .catch((err) => console.error(err));
    setSearch("");
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search by Author ID"
          value={search}
          onChange={handleSearch}
        />
      </form>
    </div>
  );
}

export default SearchByAuthor;
