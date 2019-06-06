import React from "react";
import PropTypes from "prop-types";
export default function NewComment({ handleClick, index }) {
  return (
    <div id ="comment-section" className="newComment">
      <input placeholder="Add a comment..." 
      onKeyUp={e => {
        handleClick(e, index);
      }} 
      />
    </div>
  );
}
NewComment.propTypes = {
  handleClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
};