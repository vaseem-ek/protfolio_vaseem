import React from 'react'
import logo from '../assets/raviKumarLogo.webp'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
function Navbar() {
  return (
    <nav className='flex items-center justify-between py-6 '>
      <div className='flex flex-shrink-0 items-center'>
        <a href="/" atia-label="Home">
          <h1 className='text-5xl font-extrabold'>VS</h1></a>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com/in/your-linkedin-profile" target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'>
          <FaLinkedin />
        </a>
        <a href="https://www.github.com/in/your-github-profile" target='_blank' rel='noopener noreferrer' aria-label='GitHub'>
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/in/your-instagram-profile" target='_blank' rel='noopener noreferrer' aria-label='Instagram'>
          <FaInstagram />
        </a>
        <a href="https://www.twitter.com/in/your-twitter-profile" target='_blank' rel='noopener noreferrer' aria-label='Twitter'>
          <FaSquareXTwitter />
        </a>
      </div>
    </nav>
  )
}

export default Navbar
