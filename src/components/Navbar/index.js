import React, { useState } from 'react'
import './style.css'
import { NavLink } from 'react-router-dom';

export default function Navbar() {

    const [search, setSearch] = useState(false)


    const submitSearch = (e) => {
        e.preventDefault();
        alert("searched");
    }


    const openSearch = () => {
        setSearch(true);
    }

    const searchClass = search ? 'searchInput active' : 'searchInput';

    return (
        <div className="navbar">
           <ul className="navbarMenu">
               <li><NavLink to="/">Home</NavLink></li>
               <li><NavLink to="/AboutUs">About Us</NavLink></li>
               <li><NavLink to="Post">Posts</NavLink></li>
               <li><NavLink to="/ContactUs">Contact Us</NavLink></li>
           </ul>
           <div className="search">
               <form onSubmit={submitSearch}>
                    <input type="text" className={searchClass} placeholder="Search" />
                    <img onClick={openSearch} className="searchIcon" src={require("../../assets/icons/Search.png")} alt="Search" />
               </form>
           </div>
        </div>
    )
}
