import React from 'react';
import Modal from './Modal';
import styles from '../styles/PaymentFailPopup.module.css';

interface PaymentFailPopupProps {
  onClose: () => void;
}

const PaymentFailPopup: React.FC<PaymentFailPopupProps> = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <div className={styles.failPopup}>
        <h3>Payment Failed</h3>
        <p>Oops! Something went wrong with your payment.</p>
      </div>
    </Modal>
  );
};

export default PaymentFailPopup;
