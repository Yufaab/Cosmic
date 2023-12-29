import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Home from './pages/Home'
import YufaabInstance from './lib/api'
import { AuthContextProvider } from './store/AuthContext'
import './index.css';
import Auth from './pages/Auth'
import Details from './pages/Details'
import Preview from './pages/Preview'
import Payment from './pages/Payment'
// import Report from './pages/Report'

const App = () => {
  const yufaabInstance = new YufaabInstance(process.env.REACT_APP_BACKEND_URL)
  return (
    <AuthContextProvider value={{ yufaabInstance }}>
      <Router>
        <div>
          <Header />
          <main className="py-3">
            <Container>
              <Routes>
                {/* <Route path='/reports' element={<Report rank={formData?.rank || ''} category={formData?.category || ''} />} /> */}
                <Route path='/payment' element={<Payment />} />
                <Route path="/details/preview" element={<Preview />} />
                <Route path="/details" element={<Details />} />
                <Route path='/login' element={<Auth />} />
                <Route path="/" element={<Home />} />
              </Routes>
            </Container>
          </main>
        </div>
      </Router>
    </AuthContextProvider>
  )
}

export default App
