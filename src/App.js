import Header from "./components/Header"

function App() {
  const background = {backgroundColor: 'blue'}
  const feedbackList = [
    {name: 'Anri Okita', id: 1},
    {name: 'Hitomi Tanaka', id: 2},
    {name: 'Nanako Mori', id: 3}
  ]
  // pass style into prop.

  return (
    <div style={background}>
      <Header text='Hello World'/>
      <h1>Hello, you fackin' pussy!</h1>

      {
        feedbackList.map((feedback, index) => (
          <div>{feedback.name}</div>
        ))
      }
      
      <br></br>
      
      {
        [
          <div>{feedbackList[0].name}</div>,
          <div>{feedbackList[1].name}</div>,
          <div>{feedbackList[2].name}</div>
        ]
      }

      <br></br>
      
      <div>{feedbackList[0].name}</div>
      <div>{feedbackList[1].name}</div>
      <div>{feedbackList[2].name}</div>


    </div>
  );
}

export default App;
