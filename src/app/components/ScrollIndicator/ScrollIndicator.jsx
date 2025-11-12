'use client'

import { useEffect, useState } from 'react'
import styles from './ScrollIndicator.module.css'

export default function ScrollIndicator() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY < 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={styles.scrollIndicator} style={{ opacity: visible ? 1 : 0 }}>
      <span></span>
    </div>
  )
}
