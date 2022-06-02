import React, { useState, useEffect } from "react";
import PostTile from "../Posts/PostTile";
import "./PostIndex.css"

function PostIndex() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState();
  const [userId, setUserId] = useState(Number);
  const [postBody, setPostBody] = useState(String);
  const [postTitle, setPostTitle] = useState(String);

  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error(err));
    setLoading(false);
  }, []);

  const filterByUserId = (e) => {
    setUserId(e.target.value);
  };

  const filterPostBody = (e) => {
    setPostBody(e.target.value);
  };

  const filterPostTitle = (e) => {
    setPostTitle(e.target.value);
  };

  return (
    <div className="posts-index">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div
            style={{
              paddingBottom: "1rem",
              paddingTop: "1rem",
            }}
          >
            <div>
              Filter by user ID:
              <input
							className="input"
							type="number"
							onChange={filterByUserId}
							placeholder="Search..."
              />
            </div>
						<div>
              Filter post title:
              <input
							className="input"
							type="text"
							onChange={filterPostTitle}
                placeholder="Search..."
								/>
            </div>
            <div>
              Filter post body:
              <input
								className="input"
                type="text"
                onChange={filterPostBody}
                placeholder="Search..."
              />
            </div>
          </div>
          <div className="posts">
            {posts
              ?.filter((post) => post.userId === (parseInt(userId) || post.userId))
              .filter((post) => post.body.includes(postBody))
              .filter((post) => post.title.includes(postTitle))
              .map((post) => (
								<PostTile key={post.id} props={post} />
              ))}
          </div>
        </div>
      )}

    </div>
  );
}

export default PostIndex;