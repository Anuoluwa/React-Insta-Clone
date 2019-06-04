import React from "react";

export default function NewComment({ handleClick }) {
  return (
    <div className="newComment">
      <input placeholder="Add a comment..." onKeyUp={handleClick} />
      <i className="fas fa-ellipsis-h" />
    </div>
  );
}
