import React, { useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import styles from '../styles/Header.module.css'
// import UserProfile from './UserProfile'
// import Modal from './Modal'

const Header = () => {
  const [showProfile, setShowProfile] = useState(false);
  const user = {
    name: 'Jazib Eqbal',
    email: 'jazib@gmail.com',
  };

  const handleAccountClick = () => {
    setShowProfile(true);
  };

  const handleCloseProfile = () => {
    setShowProfile(false);
  };

  return (
    <header>
      <Navbar
        className={styles.navbarHeader}
        bg="dark"
        variant="dark"
        expand="lg"
        collapseOnSelect
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand className={styles.mainHead}>YuFaab</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto float-right flex">
              <LinkContainer to="/">
                <Nav.Link className={styles.headerStyle}>
                  Home
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/user/reports">
                <Nav.Link className={styles.headerStyle}>
                  <i className="fas fa-user"></i>Reports
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link className={styles.headerStyle}>
                  <i className="fas fa-user"></i>Sign In
                </Nav.Link>
              </LinkContainer>
              {/* <LinkContainer to="/user/account"> */}
              <Nav.Link className={styles.headerStyle}>
                <div onClick={handleAccountClick}>Profile</div>
                {/* {showProfile && (
                  <Modal onClose={handleCloseProfile}>
                    <UserProfile user={user} />
                  </Modal>
                )} */}
                {/* <i className="fas fa-user"></i>Account */}
                </Nav.Link>
              {/* </LinkContainer> */}
              <LinkContainer to="/about">
                <Nav.Link className={styles.headerStyle}>
                  <i className="fas fa-user"></i>About Us
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/admin">
                <Nav.Link className={styles.headerStyle}>
                  <i className="fas fa-user"></i>Admin
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
