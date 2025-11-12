'use client'

import styles from './About.module.css'

export default function About() {
  return (
    <section className={styles.aboutSection} id="about">
      <div className="container">
        <div className={styles.aboutWrapper}>
          <div className={styles.aboutImage}>
            <div className={styles.imageContainer}>
              <div className={styles.imagePlaceholder}>👨‍💻</div>
              <div className={styles.floatingShape}></div>
            </div>
          </div>
          
          <div className={styles.aboutContent}>
            <div className={styles.sectionHeader}>
              <h2 className="gradient-text">About Me</h2>
              <div className={styles.underline}></div>
            </div>
            
            <p className={styles.description}>
              Hi! I'm <strong>Raymussen Arthur Wijaya</strong>, a passionate Data Scientist
              with a knack for turning complex data into actionable insights.
            </p>
            
            <p className={styles.description}>
              I specialize in machine learning, statistical analysis, and data visualization. I have experience
              in building predictive models, analyzing large datasets, and creating interactive dashboards.
            </p>
            
            <p className={styles.description}>
              I'm always eager to learn new technologies and apply them to solve real-world problems.
              Let's connect and create something amazing together!
            </p>
            
            {/* <div className={styles.stats}>
              <div className={styles.statItem}>
                <h3>10+</h3>
                <p>Projects Completed</p>
              </div>
              <div className={styles.statItem}>
                <h3>5+</h3>
                <p>Happy Clients</p>
              </div>
              <div className={styles.statItem}>
                <h3>2+</h3>
                <p>Years Experience</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}
