import React, { Component } from 'react'

function CommentSection(props){
        return (
            <div>
               {props.comment.text}
            </div>
        )
}

export default CommentSection;