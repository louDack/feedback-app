import Header from "./components/Header"
import { useState } from 'react'
import FeedbackList from "./components/FeedbackList"
import CustomerResponse from "./components/CustomerResponse"
import AboutPage from "./pages/AboutPage"
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import { FeedbackProvider } from './context/FeedbackContext'

function App() {
  const background = {
    backgroundColor: 'purple', 
    height: "100vh"
  }

  return (
    <FeedbackProvider>
      <Router>
        <div className='container' style={background}>
          <Routes>
            <Route exact path='/' element={
              <>
                <CustomerResponse />
                <FeedbackList />
                <Link to='/about'>To about page.</Link>
              </>
            } />
            <Route path='/about' element={<AboutPage />}/>
          </Routes>
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
