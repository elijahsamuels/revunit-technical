import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function PostComments({ props }) {
  const [comments, setComments] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts/${props.id}/comments`)
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
      })
      .catch((err) => console.error(err));
    setLoading(false);
  }, [props.id]);

	return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <Link to={`/posts/${props.id}/comments`}>Comments: {comments?.length}</Link>
        </div>
      )}
    </div>
  );
}

export default PostComments;
