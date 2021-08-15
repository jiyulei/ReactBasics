import React from 'react'

const Comment = props => {
    return (
    <div className="comment">
        <a href="/" className="avatar">
            <img alt="avatar" src={props.pic}></img>
        </a>
        <div className="content">
            <a href="/" className="author">{props.name}</a>
            <div className="metadata">
                <span className="date">
                    {props.time}
                </span>
            </div>
            <div className="text">
                {props.text}
            </div>
        </div>
    </div>
    )
}

export default Comment;