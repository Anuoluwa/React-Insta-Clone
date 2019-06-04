import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import moment from "moment";
import PropTypes from "prop-types";
import NewComment from "../CommentSection/NewComment";


function PostContainer(props) {
    const [comment, setComment] = useState({});
    const [commentArr, setCommentArr] = useState(data.comments);
  
    const handleClick = e => {
      if (e.key === "Enter") {
        let newComment = {
          username: "annonymous",
          text: e.target.value
        };
        setComment(newComment);
        let newCommentArr = commentArr.concat(newComment);
        setCommentArr(newCommentArr);
      }
    };
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
          <i className="far fa-heart fa-2x" />
          <i className="far fa-comment fa-2x" />
          <p>{data.likes} likes</p>
        </div>
        {commentArr.map(comment => {
          return <CommentSection key={comment.text} commentData={comment} />;
        })}
        <div className="card-time">
          <p>{convertTime(data.timestamp)}</p>
        </div>
        <NewComment handleClick={handleClick} value={comment} />
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

export default PostContainer
