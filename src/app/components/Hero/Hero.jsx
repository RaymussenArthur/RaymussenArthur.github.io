'use client'

import styles from './Hero.module.css'
import { FaGithub, FaLinkedin, FaInstagram, FaDownload, FaBriefcase } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className="container">
        <div className={styles.heroWrapper}>
          <div className={styles.badge}>
            <span>Welcome to my portfolio</span>
          </div>
          
          <h1 className={styles.mainTitle}>
            Hi, I'm <br />
            <span className="gradient-text">Raymussen Arthur Wijaya</span>
          </h1>
          
          <h2 className={styles.subtitle}>
            <span className={styles.roleText}>Data Scientist</span>
            <span className={styles.cursor}>|</span>
          </h2>
          
          <p className={styles.description}>
            Passionate about uncovering insights from data and building intelligent solutions. 
            Specialized in machine learning, data analysis, and visualization.
          </p>
          
          {/* Buttons */}
          <div className={styles.heroButtons}>
            <a href="/Ray_cv.pdf" download="Raymussen_Arthur_Wijaya_CV.pdf" className="btn btn-primary">
              <FaDownload />
              <span> Download CV</span>
            </a>
            <a href="#projects" className="btn btn-secondary">
              <FaBriefcase />
              <span> View Projects</span>
            </a>
          </div>
          
          {/* Social Links */}
          <div className={styles.socialLinks}>
            <a href="https://github.com/raymussenarthur" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/raymussen-arthur-wijaya-908164364" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <FaLinkedin />
            </a>
            <a href="https://instagram.com/itznotray" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
