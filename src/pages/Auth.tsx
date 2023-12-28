import React, { useState } from 'react';
import styles from '../styles/Auth.module.css';

interface UserCredentials {
  email: string;
  password: string;
}

interface UserRegistration extends UserCredentials {
  username: string;
}

const LoginPage: React.FC<{ onLogin: (credentials: UserCredentials) => void }> = () => {
  const [formData, setFormData] = useState<UserCredentials>({
    email: '',
    password: '',
  });
  const [isEmail, setIsEmail] = useState<boolean>(true);
  const [isPassword, setIsPassword] = useState<boolean>(true);

  const handleInputChange = (name: string, value: string | number) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = () => {
    setIsEmail(!!formData.email);
    setIsPassword(!!formData.password);

    const isFormValid =
      !!formData.email &&
      !!formData.password

    if (isFormValid) {
      console.log('Form data:', formData);
    }
  };

  return (
    <div className={`${styles.authContainer}`}>
      <div className={`${styles.authForm}`}>
        <h2>Login</h2>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email<span className={styles.required}>*</span></label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className={!isEmail ? styles.error : ''}
          />
          {!isEmail && (
            <span className={styles.errorMessage}>Email is required.</span>
          )}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password<span className={styles.required}>*</span></label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={(e) => handleInputChange('password', e.target.value)}
            className={!isPassword ? styles.error : ''}
          />
          {!isPassword && (
            <span className={styles.errorMessage}>Password is required.</span>
          )}
        </div>
        <button className={styles.loginSignUpButton} onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

const SignupPage: React.FC<{ onSignup: (userData: UserRegistration) => void }> = () => {
  const [formData, setFormData] = useState<UserRegistration>({
    email: '',
    password: '',
    username: '',
  });

  const [isUser, setIsUserName] = useState<boolean>(true);
  const [isEmail, setIsEmail] = useState<boolean>(true);
  const [isPassword, setIsPassword] = useState<boolean>(true);

  const handleInputChange = (name: string, value: string | number) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSignUp = () => {
    setIsUserName(!!formData.username);
    setIsEmail(!!formData.email);
    setIsPassword(!!formData.password);

    const isFormValid =
      !!formData.email &&
      !!formData.password &&
      !!formData.username

    if (isFormValid) {
      console.log('Form data:', formData);
    }
  };

  return (
    <div className={`${styles.authContainer}`}>
      <div className={`${styles.authForm}`}>
        <h2>Signup</h2>
        <div className={styles.formGroup}>
          <label htmlFor="username">Username<span className={styles.required}>*</span></label>
          <input
            type="text"
            id="username"
            onChange={(e) => handleInputChange('username', e.target.value)}
            className={!isUser ? styles.error : ''}
          />
            {!isUser && (
            <span className={styles.errorMessage}>Username is required.</span>
          )}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email<span className={styles.required}>*</span></label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className={!isEmail ? styles.error : ''}
          />
          {!isEmail && (
            <span className={styles.errorMessage}>Email is required.</span>
          )}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password<span className={styles.required}>*</span></label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={(e) => handleInputChange('password', e.target.value)}
            className={!isPassword ? styles.error : ''}
          />
          {!isPassword && (
            <span className={styles.errorMessage}>Password is required.</span>
          )}
        </div>
        <button className={styles.loginSignUpButton} onClick={handleSignUp}>Signup</button>
      </div>
    </div>
  );
};

const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const handleToggle = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <div className={styles.authContainer}>
      {isLogin ? (
        <LoginPage onLogin={(credentials) => console.log('Login:', credentials)} />
      ) : (
        <SignupPage onSignup={(userData) => console.log('Signup:', userData)} />
      )}
      <button className={`${styles.toggleButton}`} onClick={handleToggle}>
        {isLogin ? 'Not a member yet? Register' : 'Already a member? LogIn'}
      </button>
    </div>
  );
};

export default Auth;
