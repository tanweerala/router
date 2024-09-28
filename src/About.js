import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import Header from "./Header"

const About = () => {
  const navigate =useNavigate();
  const goContact =() =>{
    navigate("/contact")
  }
  return (
    <>
    {/* <nav>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="contact">Contact</NavLink>
                <NavLink to="login">Login</NavLink>
            </li>
        </ul>
    </nav> */}





   
     <Header/>
    <h1>About COMPONENT !!!!!!!!</h1>
    <button onClick={goContact}>Go To Contact</button>
    </>
  )
}

export default About