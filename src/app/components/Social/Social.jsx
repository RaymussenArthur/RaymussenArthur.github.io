'use client'

import styles from './Social.module.css'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'

const socialLinks = [
  {
    icon: <FaGithub />,
    name: "GitHub",
    handle: "@RaymussenArthur",
    description: "Open source projects & code",
    url: "https://github.com/raymussenarthur",
    className: styles.github
  },
  {
    icon: <FaInstagram />,
    name: "Instagram",
    handle: "@itznotray",
    description: "Behind the scenes & daily updates",
    url: "https://instagram.com/itznotray",
    className: styles.instagram
  },
  {
    icon: <FaLinkedin />,
    name: "LinkedIn",
    handle: "Raymussen Arthur Wijaya",
    description: "Professional network & career",
    url: "https://linkedin.com/in/raymussen-arthur-wijaya-908164364",
    className: styles.linkedin
  }
]

export default function Social() {
  return (
    <section className={styles.socialSection} id="social">
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className="gradient-text">Let's Connect!</h2>
          <p>Follow my journey and let's collaborate</p>
        </div>
        <div className={styles.socialGrid}>
          {socialLinks.map((social, index) => (
            <a 
              key={index}
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${styles.socialCard} ${social.className}`}
            >
              <div className={styles.socialIcon}>{social.icon}</div>
              <h3>{social.name}</h3>
              <p className={styles.handle}>{social.handle}</p>
              <p>{social.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
