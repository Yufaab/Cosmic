import React from 'react'
import xx from '../utils/B303.svg'
import styles from '../styles/Home.module.css'
import Feature from '../components/Feature'
import Pricing from '../components/Pricing'

const Home = () => {
  return (
    <>
    <div className={styles.homeContainer}>
      <div className={styles.leftSide}>
      <h4>You are Fabulous <span className={styles.yuFaabText}>YuFaab!</span></h4>
        <button className={styles.getStartedButton}>Get Started</button>
        <div className={styles.popupContainer}>Register for Counseling</div>
      </div>
      <div className={styles.rightSide}>
        <img src={xx} alt="Your" />
      </div>
    </div>
    <Feature />
    <Pricing />
    </>
  )
}

export default Home
