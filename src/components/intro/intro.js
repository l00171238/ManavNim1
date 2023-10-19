import React from 'react';
import './intro.css';
import btnImg from '../../assests/hireme.png'
import IntroImg from '../../assests/introimg.png'
import { Link } from 'react-scroll';

function Intro() {
  return (
    <section className='intro' >
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='nameIntro'>Manav Nim</span> <br/> DevOps Engineer</span>
            <p className='paraIntro'>With Master's in DevOps and Experience in automating software build, testing, <br/> and deployment processes.  As well as monitoring and troubleshooting <br/>production systems..  </p>
            <Link ><button className='btn' ><img src={btnImg} alt='alternative ' className='btnImg' /> Hire Me</button></Link>
        </div>
        <img src={IntroImg} alt='Intro Image' className='bg' />
    </section>
  )
}

export default Intro
