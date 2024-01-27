import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import styles from "../styles/Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row>
          <Col className={`text-center ${styles.footerText}`}>
            Copyright &copy; YuFaab
          </Col>
        </Row>
        <Row>
          <Col className={`text-center ${styles.socialIcons}`}>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className={styles.icon} />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <FaTwitter className={styles.icon} />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className={styles.icon} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
