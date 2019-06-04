import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection';

function PostContainer(props) {

        return (
            <div>
                {
                            <section key={props.dummyData.username}>
                            <div>{props.dummyData.username}</div>
                            <div>{props.dummyData.likes}</div>
                            { props.dummyData.comments.map((user) =>{
                                return (
                                    <CommentSection comment={user} />
                                )
                            }) }
                            </section>
            
                }
            </div>
        )
}

export default PostContainer
