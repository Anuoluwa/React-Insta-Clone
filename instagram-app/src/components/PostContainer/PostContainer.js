import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import moment from "moment";
import PropTypes from "prop-types";
import "./PostContainer.css";
import NewComment from "../CommentSection/NewComment";

function PostContainer({ data, index, handleClick, handleLike }) {
  let like = (
    <i
      className="far fa-heart fa-2x"
      onClick={() => {
        handleLike(index);
      }}
    />
  );
  if (data.isLiked === true) {
    like = (
      <i
        className="fas fa-heart fa-2x"
        onClick={() => {
          handleLike(index);
        }}
      />
    );
  }

  const convertTime = time => {
    let newTimeArr = time.split(" ");
    newTimeArr[1] = newTimeArr[1].slice(0, -2);
    newTimeArr = newTimeArr.join(" ");
    let newTime = Date.parse(newTimeArr);

    return moment(newTime)
      .startOf("day")
      .fromNow();
  };

  return (
    <div className="postContainer">
      <div className="card">
        <div className="card-user-detail">
          <img src={data.thumbnailUrl} alt={data.username} />
          <h3>{data.username}</h3>
        </div>
        <div className="card-image">
          <img src={data.imageUrl} alt={data.username} />
        </div>

        <div className="card-footer">
          {like}
          <i className="far fa-comment fa-2x" />
          <p>{data.likes} likes</p>
        </div>
        {data.comments.map(comment => {
          return <CommentSection key={comment.text} commentData={comment} />;
        })}
        <div className="card-time">
          <p>{convertTime(data.timestamp)}</p>
        </div>
        <NewComment handleClick={handleClick} value={index} />
      </div>
    </div>
  );
}

PostContainer.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired,
    timestamp: PropTypes.string.isRequired
  }).isRequired
};

export default PostContainer;
