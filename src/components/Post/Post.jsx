import React from 'react'
import './Post.css'
import Comment from '/src/assets/comment.png'
import Share from '/src/assets/share.png'
import Heart from '/src/assets/like.png'
import NotLike from '/src/assets/notlike.png'


const Post = ({data}) => {
  return (
    <div className="Post">
        <img src={data.img} alt="" />


        <div className="postReact">
            <img src={data.liked?Heart: NotLike} alt="" />
            <img src={Comment} alt="" />
            <img src={Share} alt="" />
        </div>


        <span style={{color: "var(--gray)", fontSize: '12px'}}>{data.likes} likes</span>

        <div className="detail">
            <span><b>{data.name}</b></span>
            <span> {data.desc}</span>
        </div>
    </div>
  )
}

export default Post