import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from '../styles/Preview.module.css';

interface PreviewProps {}

const Preview: React.FC<PreviewProps> = () => {
    const { state } = useLocation();
    const formData = state?.formData;
    
    const navigate = useNavigate();
  
    const handleBack = () => {
      navigate(-1);
    };
  
    const handleProceedToPayment = () => {
      console.log('Proceeding to payment...');
      navigate('/payment');
    };
  
    return (
      <div className={styles.previewContainer}>
        <h2 className={styles.previewHeading}>Preview</h2>
        <div className={styles.summary}>
          <p>
            <strong>Rank:</strong>{' '}
            <span className={formData?.rank ? styles.highlight : ''}>
              {formData?.rank || 'Not provided'}
            </span>
          </p>
          <p>
            <strong>Category:</strong>{' '}
            <span className={formData?.category ? styles.highlight : ''}>
              {formData?.category || 'Not provided'}
            </span>
          </p>
          <p>
            <strong>Gender:</strong>{' '}
            <span className={formData?.gender ? styles.highlight : ''}>
              {formData?.gender || 'Not provided'}
            </span>
          </p>
          <p>
            <strong>Category Rank:</strong>{' '}
            <span className={formData?.categoryRank ? styles.highlight : ''}>
              {formData?.categoryRank || 'Not provided'}
            </span>
          </p>
          <p>
            <strong>State:</strong>{' '}
            <span className={formData?.state ? styles.highlight : ''}>
              {formData?.state || 'Not provided'}
            </span>
          </p>
          <p>
            <strong>Branch:</strong>{' '}
            <span className={formData?.branch ? styles.highlight : ''}>
              {formData?.branch || 'Not provided'}
            </span>
          </p>
          <p>
            <strong>College:</strong>{' '}
            <span className={formData?.college ? styles.highlight : ''}>
              {formData?.college || 'Not provided'}
            </span>
          </p>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.backButton} onClick={handleBack}>
            Back
          </button>
          <button className={styles.proceedButton} onClick={handleProceedToPayment}>
            Proceed to Payment
          </button>
        </div>
      </div>
    );
  };
  
  export default Preview;
