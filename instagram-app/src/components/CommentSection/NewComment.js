import React from "react";

export default function NewComment({ handleClick }) {
  return (
    <div id ="comment-section" className="newComment">
      <input placeholder="Add a comment..." onKeyUp={handleClick} />
    </div>
  );
}
