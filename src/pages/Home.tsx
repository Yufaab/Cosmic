import React from 'react'
import xx from '../utils/B303.svg'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.leftSide}>
        <h4>
          Welcome to <span className={styles.yuFaabText}>YuFaab</span>
        </h4>
        <button className={styles.getStartedButton}>Get Started</button>
        <div className={styles.popupContainer}>Register for Counseling</div>
      </div>
      <div className={styles.rightSide}>
        <img src={xx} alt="Your" />
      </div>
    </div>
  )
}

export default Home
