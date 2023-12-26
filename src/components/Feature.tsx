import React from 'react';
import styles from '../styles/Feature.module.css';

const Feature = () => {
  return (
    <div className={styles.featureContainer}>
    <h2 className={styles.featureHeading}>Features</h2>
    <div className={styles.featureSections}>
      <div className={styles.featureSection}>
        <h3>Low Pricing</h3>
        <p>Effective Results.</p>
      </div>
      <div className={styles.featureSection}>
        <h3>Quality</h3>
        <p>We train, We examine, We deliver.</p>
      </div>
      <div className={styles.featureSection}>
        <h3>Zero Time, Zero Defect.</h3>
        <p>Know Your Colleges in Real Time.</p>
      </div>
    </div>
  </div>
  );
};

export default Feature;
