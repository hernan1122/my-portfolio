import { useState } from 'react'
/* import { HamburgerIcon } from './HamburgerIcon' */
import '../styles/Menu.css'
import cv from '../downloads/cv-axel-torrico.pdf'

//icons
import { BsFillPersonFill } from 'react-icons/bs'
import { GoTools } from 'react-icons/go'
import { AiFillPhone } from 'react-icons/ai'
import { BsFilePersonFill } from 'react-icons/bs'

export function Menu() {
  const [isOpen, setIsOpen] = useState(false)
  
  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='menu-container'>
      <a className='menu-title' href='#home'>Portfolio | <span>Axel Torrico</span></a>
      <div className='menu-links'>
        <ul className={`ul ${isOpen && 'open'}`}>
          <li>
            <a id='aboutMe' href="#about" onClick={handleClick}>
              <BsFillPersonFill className='menu-icon'/> About me
            </a>
          </li>
          <li>
            <a id='myJobs' href="#jobs" onClick={handleClick}>
              <GoTools className='menu-icon' /> My Jobs
            </a>
          </li>
          <li>
            <a id='contactMe' href="#contacts" onClick={handleClick}>
              <AiFillPhone className='menu-icon' /> Contact me
            </a>
          </li>
          <li>
            <a id='cv' className="cv" download='CV Axel Torrico' href={cv} onClick={handleClick}>
              <BsFilePersonFill className='menu-icon' /> C. Vitae
            </a>
          </li>
        </ul>
      </div>
      <div
        onClick={handleClick}
        className={`icon nav-icon-5 ${isOpen && 'open'}`}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  )
}
