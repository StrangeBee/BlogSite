import React from 'react'
import Card from '../UI/Card'
import './style.css'


export default function BlogPost() {
    return (
            <div className="blogPostContainer">
                <Card>
                    <div className="blogHeader">
                        <span className="blogCategory">Featured</span>
                        <h1 className="postTitle">Beautiful is always beautiful</h1>
                        <span className="postedBy">posted on Oct 26,2020 by Doga Blogging Tips</span>
                    </div>

                    <div className="postImageContainer">
                         <img src={require('../../blogPostImages/fashion-1.jpg')} alt="Post Image" />
                    </div>
                </Card>
            </div> 
    )
}
