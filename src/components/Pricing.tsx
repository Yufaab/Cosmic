import React, { useState } from 'react';
import styles from '../styles/Pricing.module.css';

const Pricing = () => {
  const [selectedSection, setSelectedSection] = useState<number>(2);

  const handleSectionClick = (sectionNumber: number) => {
    setSelectedSection(sectionNumber);
  };

  const pricingData = [
    {
      title: 'Pricing 1',
      monthlyPrice: 10,
      features: ['Feature A', 'Feature B', 'Feature C'],
    },
    {
      title: 'Pricing 2',
      monthlyPrice: 20,
      features: ['Feature X', 'Feature Y', 'Feature Z'],
    },
    {
      title: 'Pricing 3',
      monthlyPrice: 30,
      features: ['Feature P', 'Feature Q', 'Feature R'],
    },
  ];

  return (
    <div className={styles.pricingContainer}>
      <h2 className={styles.pricingHeading}>Pricing</h2>
      <div className={styles.pricingSections}>
        {pricingData.map((section, index) => (
          <div
            key={index + 1}
            onClick={() => handleSectionClick(index + 1)}
            className={`${styles.pricingSection} ${
              selectedSection === index + 1 ? styles.selectedSection : ''
            }`}
          >
            <h3>{section.title}</h3>
            <p>${section.monthlyPrice} Monthly</p>
            <div className={styles.features}>
              {section.features.map((feature, featureIndex) => (
                <p key={featureIndex}>{feature}</p>
              ))}
            </div>
            <button className={styles.buyNowButton}>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
