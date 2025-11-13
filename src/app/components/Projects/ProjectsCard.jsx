'use client'

import styles from './Projects.module.css'

export default function ProjectCard({ number, title, description, techStack, link }) {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectNumber}>{number}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.techStack}>
        {techStack.map((tech, index) => (
          <span key={index} className={styles.techTag}>{tech}</span>
        ))}
      </div>
      <a 
        href={link} 
        target="_blank"
        rel="noopener noreferrer" 
        className={styles.projectLink}
      >
        View Details 
        {/* Panah dipisah ke span agar bisa dianimasikan oleh CSS */}
        <span className={styles.projectLinkArrow}>→</span>
      </a>
    </div>
  )
}