import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
 import "./index.css"
const Contact = () => {
  return (
    <>

    {/*  <nav>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="contact">Contact</NavLink>
                <NavLink to="login">Login</NavLink>
            </li>
        </ul>
    </nav> */}
       <header/>
       <h1> Contact us Page!!!!</h1>
       <div className='nested'>
          <NavLink to="youtube">Youtube</NavLink>
          <NavLink to="twitter">Twitter</NavLink>
          <NavLink to="github">Github</NavLink>
       </div>
       <Outlet/>
    </>
  )
}

export default Contact