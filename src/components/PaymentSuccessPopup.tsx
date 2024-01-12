import React from 'react';
import Modal from './Modal';
import styles from '../styles/PaymentSuccessPopup.module.css';

interface PaymentSuccessPopupProps {
  onClose: () => void;
}

const PaymentSuccessPopup: React.FC<PaymentSuccessPopupProps> = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <div className={styles.successPopup}>
        <h3>Payment Successful!</h3>
        <p>Your payment has been processed successfully.</p>
      </div>
    </Modal>
  );
};

export default PaymentSuccessPopup;
