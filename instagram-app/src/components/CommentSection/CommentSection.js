import React from 'react';
import PropTypes from "prop-types";
import "./CommentSection.css";

function CommentSection({ commentData }){
    return (
        <div className="commentSection">
          <p className="commentUsername">
            <b>{commentData.username}</b>
            {commentData.text}
          </p>
        </div>
      );
}

CommentSection.propTypes = {
    commentData: PropTypes.shape({
      username: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  };

export default CommentSection;