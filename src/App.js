import Header from "./components/Header"
import FeedbackItem from "./components/FeedbackItem"

function App() {
  const test = true
  const background = {
    backgroundColor: 'purple', 
    height: "100vh"
  }

  const feedbackList = [
    {name: 'Anri Okita', id: 1},
    {name: 'Hitomi Tanaka', id: 2},
    {name: 'Nanako Mori', id: 3}
  ]

  // Goal: Conditional everything!
  
  return (
    <div className='container' style={background}>

      <FeedbackItem />
      <FeedbackItem />

      {feedbackList.map((feedback, index) => (
          <Header key={index} text={feedback.name} />
      ))}
    </div>
  );
}

export default App;
