import React, { useContext, useState } from 'react'
import styles from '../styles/Auth.module.css'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../store/AuthContext'
import { useGoogleLogin } from "@react-oauth/google";

interface UserCredentials {
  email: string
  password: string
}

interface UserRegistration extends UserCredentials {
  firstname: string
  lastname: string
  phone: string
}

const LoginPage: React.FC<{
  onLogin: (credentials: UserCredentials) => void
}> = () => {
  const yufaabInstance = useContext(AuthContext)
  const navigate = useNavigate()
  const [formData, setFormData] = useState<UserCredentials>({
    email: '',
    password: '',
  })
  const [isEmail, setIsEmail] = useState<boolean>(true)
  const [isPassword, setIsPassword] = useState<boolean>(true)

  const handleInputChange = (name: string, value: string | number) => {
    setFormData({ ...formData, [name]: value })

    if (name === 'email') {
      setIsEmail(true)
    } else if (name === 'password') {
      setIsPassword(true)
    }
  }

  const handleLogin = async () => {
    setIsEmail(!!formData.email)
    setIsPassword(!!formData.password)

    const isFormValid = !!formData.email && !!formData.password

    if (isFormValid) {
      console.log('Form data:', formData)
      await yufaabInstance?.login(formData)
      navigate('/')
    }
  }

  return (
    <div className={`${styles.authContainer}`}>
      <div className={`${styles.authForm}`}>
        <h2>Login</h2>
        <div className={styles.formGroup}>
          <label htmlFor="email">
            Email<span className={styles.required}>*</span>
          </label>
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
          <label htmlFor="password">
            Password<span className={styles.required}>*</span>
          </label>
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
        <button className={styles.loginSignUpButton} onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  )
}

const SignupPage: React.FC<{
  onSignup: (userData: UserRegistration) => void
}> = () => {
  const yufaabInstance = useContext(AuthContext)
  const navigate = useNavigate()
  const [formData, setFormData] = useState<UserRegistration>({
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    phone: '',
  })

  const [isFirstName, setIsFirstName] = useState<boolean>(true)
  const [isLastName, setIsLastName] = useState<boolean>(true)
  const [isPhone, setIsPhone] = useState<boolean>(true)
  const [isEmail, setIsEmail] = useState<boolean>(true)
  const [isPassword, setIsPassword] = useState<boolean>(true)

  const handleInputChange = (name: string, value: string | number) => {
    setFormData({ ...formData, [name]: value })

    if (name === 'username') {
      setIsPhone(true)
    } else if (name === 'email') {
      setIsEmail(true)
    } else if (name === 'password') {
      setIsPassword(true)
    } else if (name === 'firstname') {
      setIsFirstName(true)
    } else if (name === 'lastname') {
      setIsLastName(true)
    } else if (name === 'phone') {
      setIsPhone(true)
    }
  }

  const handleSignUp = async () => {
    setIsFirstName(!!formData.firstname)
    setIsEmail(!!formData.email)
    setIsPassword(!!formData.password)

    const isFormValid =
      !!formData.email &&
      !!formData.password &&
      !!formData.firstname &&
      !!formData.lastname &&
      !!formData.phone

    if (isFormValid) {
      console.log('Form data:', formData)
      await yufaabInstance?.signup(formData) 
      navigate('/')
    }
  }

  return (
    <div className={`${styles.authContainer}`}>
      <div className={`${styles.authForm}`}>
        <h2>Signup</h2>
        <div className={styles.formGroup}>
          <label htmlFor="firstname">
            First Name<span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            id="firstname"
            onChange={(e) => handleInputChange('firstname', e.target.value)}
            className={!isFirstName ? styles.error : ''}
          />
          {!isFirstName && (
            <span className={styles.errorMessage}>Firstname is required.</span>
          )}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="lastname">
          Last Name<span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            id="lastname"
            onChange={(e) => handleInputChange('lastname', e.target.value)}
            className={!isFirstName ? styles.error : ''}
          />
          {!isLastName && (
            <span className={styles.errorMessage}>Firstname is required.</span>
          )}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">
            Email<span className={styles.required}>*</span>
          </label>
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
          <label htmlFor="password">
            Password<span className={styles.required}>*</span>
          </label>
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
        <div className={styles.formGroup}>
          <label htmlFor="phone">
            Phone<span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            id="phone"
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className={!isFirstName ? styles.error : ''}
          />
          {!isPhone && (
            <span className={styles.errorMessage}>Firstname is required.</span>
          )}
        </div>
        <button className={styles.loginSignUpButton} onClick={handleSignUp}>
          Signup
        </button>
      </div>
    </div>
  )
}

const Auth: React.FC = () => {
  const yufaabInstance = useContext(AuthContext)
  const [isLogin, setIsLogin] = useState(true)
  const handleToggle = () => {
    setIsLogin((prev) => !prev)
  }
  const login = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      if(isLogin)
        await yufaabInstance?.login({ google_token: codeResponse.access_token })
      else 
        await yufaabInstance?.signup({ google_token: codeResponse.access_token })
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  return (
    <div className={styles.authContainer}>
      {isLogin ? (
        <LoginPage
          onLogin={(credentials) => console.log('Login:', credentials)}
        />
      ) : (
        <SignupPage onSignup={(userData) => console.log('Signup:', userData)} />
      )}
      <button className={`${styles.toggleButton}`} onClick={handleToggle}>
        {isLogin ? 'Not a member yet? Register' : 'Already a member? LogIn'}
      </button>
      <button onClick={() => login()}>{isLogin ? 'Sign in with Google 🚀' : 'Sign up with Google 🚀'}</button>
    </div>
  )
}

export default Auth
