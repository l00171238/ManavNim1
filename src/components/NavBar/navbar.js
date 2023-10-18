import React from 'react';
import './navbar.css';
import barlogo from '../../assests/barlogo.png'
import contactimg from '../../assests/contimg.svg'
import {Link} from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='navbar' >
        <img src={barlogo} alt='logo' />
        <div className='desktopMenu' >
            <Link className='desktopMenuListIteam' >Home</Link>
            <Link className='desktopMenuListIteam' >Projects</Link>
            <Link className='desktopMenuListIteam' >Resume</Link>
            <Link className='desktopMenuListIteam' >About</Link>
        </div>
        <button className='desktopMenuBtn'> Contact Me !  </button>
    </nav>
  )
}

export default Navbar