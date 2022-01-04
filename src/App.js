import Header from "./components/Header"
import { useState } from 'react'
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData"
import CustomerResponse from "./components/CustomerResponse"

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
    <div className='container' style={background}>
      <CustomerResponse />
      <FeedbackList data={feedback} deleteFeedback={deleteFeedback}/>
      
    </div>
  );
}

export default App;
