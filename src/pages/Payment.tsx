import React, { useState } from 'react';
import styles from '../styles/Payment.module.css';
import PaymentSuccessPopup from '../components/PaymentSuccessPopup';
import PaymentFailPopup from '../components/PaymentFailPopup';

const Payment: React.FC = () => {
  const [isPaymentSuccess, setIsPaymentSuccess] = useState<boolean | null>(null);

  const handlePayment = () => {
    const isPaymentSuccess = false;
    setIsPaymentSuccess(isPaymentSuccess);
  };

  const handlePopupClose = () => {
    setIsPaymentSuccess(null);
  };

  return (
    <div className={styles.paymentContainer}>
      <h2>Payment Page</h2>
      <button className={styles.proceedToPaymentButton} onClick={handlePayment}>Pay Now</button>
      {isPaymentSuccess !== null && (
        isPaymentSuccess ? (
          <PaymentSuccessPopup onClose={handlePopupClose} />
        ) : (
          <PaymentFailPopup onClose={handlePopupClose} />
        )
      )}
    </div>
  );
};

export default Payment;
