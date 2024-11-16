import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black flex flex-row justify-between'>
      <p className='copy'>© Copyright 2024 Back Movie</p>
      <ul className='listSocial'>
        <li>
          <a href='#' aria-label='Facebook Arkane Studio'>
            <i className="fa-brands fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href='#' aria-label='X Arkane Studio'>
            <i className="fa-brands fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href='#' aria-label='Linkedin Arkane Studio'>
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer