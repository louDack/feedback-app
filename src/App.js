import Header from "./components/Header"
import { useState } from 'react'
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData"
import CustomerResponse from "./components/CustomerResponse"
import AboutPage from "./pages/AboutPage"
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'

function App() {
  const background = {
    backgroundColor: 'purple', 
    height: "100vh"
  }

  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    const newFeedbackList = feedback.filter((list) => list.id !== id)
    setFeedback(newFeedbackList)
  }
  
  return (
    <Router>
      <div className='container' style={background}>
        <Routes>
          {/* Must use 'exact path' b/c url path matching catches all matching cases. So, if matching '/', '/' AND '/about' would match and both would render as a result. */}
          <Route exact path='/' element={
            <>
              <CustomerResponse />
              <FeedbackList data={feedback} deleteFeedback={deleteFeedback}/>

              {/* Prevents reloading of the page. */}
              <Link to='/about'>To about page.</Link>
            </>
          } />

          {/* Path is literally the url path. */}
          {/* Element takes a component wrapped in JSX braces. */}
          <Route path='/about' element={<AboutPage />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
