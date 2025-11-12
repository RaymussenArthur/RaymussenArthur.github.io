'use client'

import { useState } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className={styles.nav}>
      <div className="container">
        <div className={styles.navContent}>
          <div className={styles.logo}>RAW</div>
          
          <ul className={`${styles.navMenu} ${isOpen ? styles.active : ''}`}>
            <li><a href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
            <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
            <li><a href="#social" onClick={closeMenu}>Social</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>

          <button 
            className={`${styles.hamburger} ${isOpen ? styles.active : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </div>
      </div>
    </nav>
  )
}
