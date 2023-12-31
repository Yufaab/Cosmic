import React from 'react';
import styles from '../styles/Report.module.css';

interface ReportProps {
  rank: string;
  category: string;
}

const Report: React.FC<ReportProps> = ({ rank, category }) => {
  const handleDownload = () => {
    console.log(`Downloading report for Rank ${rank}, Category ${category}`);
  };

  return (
    <div className={styles.reportContainer}>
      <div className={styles.reportCard}>
        <h3>Generated Report</h3>
        <p>Rank: {rank}</p>
        <p>Category: {category}</p>
        <button onClick={handleDownload}>Download</button>
      </div>
    </div>
  );
};

export default Report;
