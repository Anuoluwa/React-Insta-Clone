import React from "react";

export default function NewComment({ handleClick, index }) {
  return (
    <div id ="comment-section" className="newComment">
     
      <form onSubmit={(e)=> handleClick(e, index)}>
 <input placeholder="Add a comment..." />
      </form>
      />
    </div>
  );
}