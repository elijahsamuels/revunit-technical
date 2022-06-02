import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./PostDetails.css";

function PostDetails() {
  const [post, setPost] = useState();
  const [commentsArray, setCommentsArray] = useState();
  const [loading, setLoading] = useState(true);

  let params = useParams();

  useEffect(() => {

    setLoading(true);
		fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
		.then((response) => response.json())
		.then((data) => {
			setPost(data);
		})
		.catch((err) => console.error(err));

    fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}/comments`)
      .then((response) => response.json())
      .then((data) => {
        setCommentsArray(data);
      })
      .catch((err) => console.error(err));
    setLoading(false);
  }, [params.postId]);

  const displayComment = (array) => {
    return array?.map((comment) => {
      return (
        <div className={"comment"} key={comment.id}>
          <div className="comment-body">{comment.body}</div>
          <div className="comment-user">
            <b>Comment by: </b>
            <div className="comment-name">{comment.name}</div>
            <div className="comment-email">
              <a href={`mailto:${comment.email}`}> {comment.email}</a>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className={"post-details"}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div >
          <div className="post-title">{post?.title}</div>
          <div className="post-body">
            <i>{post?.body}</i>
          </div>
          {displayComment(commentsArray)}
        </div>
      )}
    </div>
  );
}

export default PostDetails;
