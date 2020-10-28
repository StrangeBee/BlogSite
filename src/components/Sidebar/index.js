import React, {useState, useEffect} from 'react'
import Card from '../UI/Card'
import './style.css'

import blogPost from '../../data/data.json';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {


  const[posts, setPosts] = useState([]) 


  useEffect(() => {
    const posts = blogPost.data;
    setPosts(posts);
  }, posts);

    return (
        <div className="sidebarContainer">
          <Card style={{marginBottom: '20px', padding: '20px', boxSizing: 'border-box'}}>
            <div className="cardHeader">
                <span>About Us</span>
            </div>
            <div className="profileImageContainer">
              <img src="https://images.pexels.com/photos/4195342/pexels-photo-4195342.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200" alt="" />
            </div>
            <div className="cardBody">
                <p className="personalBio">My name is Oduola Ebenezer I am a software developer specialization in Frontend development.................:)</p>
            </div>
          </Card> 

          <Card style={{marginBottom: '20px', padding: '20px', boxSizing: 'border-box'}}>
            <div className="cardHeader">
                <span>Social Network</span>
            </div>
          </Card> 

          <Card style={{marginBottom: '20px', padding: '20px', boxSizing: 'border-box'}}>
            <div className="cardHeader">
              <span>Recent Posts</span>
            </div>

            <div className="recentPosts">

              {
                posts.map(post => {
                  return(
                    <NavLink to={`/post/${post.id}`}>
                      <div className="recentPost">
                        <h3>{post.blogTitle}</h3>
                        <span>{post.postedOn}</span>
                      </div>
                    </NavLink>
                  
                  )
                })
              }
              
            </div>
          </Card>
        </div>   
    )
}
