import Header from "./components/Header"
import { useState } from 'react'
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData"

function App() {
  const background = {
    backgroundColor: 'purple', 
    height: "100vh"
  }

  const [feedback, setFeedback] = useState(FeedbackData)
  
  return (
    <div className='container' style={background}>

      <FeedbackList data={feedback}/>
      
    </div>
  );
}

export default App;
