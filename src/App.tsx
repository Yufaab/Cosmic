import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Home from './pages/Home'

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <main className="py-3">
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Container>
        </main>
      </div>
    </Router>
  )
}

export default App
