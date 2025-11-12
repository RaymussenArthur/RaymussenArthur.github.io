'use client'

import styles from './Background.module.css'

export default function Background() {
  return (
    <>
      <div className={styles.animatedBg}></div>
      <div className={`${styles.glowOrb} ${styles.orb1}`}></div>
      <div className={`${styles.glowOrb} ${styles.orb2}`}></div>
      <div className={`${styles.glowOrb} ${styles.orb3}`}></div>
      
      <div className={styles.particles}>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className={styles.particle}
            style={{
              top: `${10 + i * 15}%`,
              left: `${10 + i * 12}%`,
              animationDelay: `${i}s`
            }}
          ></div>
        ))}
      </div>
    </>
  )
}
