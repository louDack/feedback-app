import Header from "./components/Header"

function App() {
  const test = true
  const background = {backgroundColor: 'blue'}
  const feedbackList = [
    {name: 'Anri Okita', id: 1},
    {name: 'Hitomi Tanaka', id: 2},
    {name: 'Nanako Mori', id: 3}
  ]

  let color, textColor = {color: 'green'}
  let moon = <div style={{backgroundColor: 'silver'}}>HAIL MOON</div>

  // Goal: Conditional everything!
  
  return (
    <div style={background}>
      <Header text='World'/>
      <h1>Fuck you, fackin' pussy!</h1>
      
      {/* What the fk is this? */}
      {/* Conditional Rendering via ternary operator */}
      {color = test ? 'red' : 'blue'}
      {console.log(color)}

      {/* Dynamic styling */}
      <div style={textColor}>I'm dynamic styling!</div>
      <Header text={'TIMOTHY'} textColor={'purple'} />
      
      {/* Error warning if passing in wrong type into props. */}
      {/* <Header text={123} textColor={'purple'} /> */}

      {test ? 'suck' : 'Lick booogers.'}
      {!test ? <div style={{color: 'red'}}><h1>HERE I AM</h1></div> : <h5>Go forth eorlingas!</h5>}

      {test && <div style={{backgroundColor: 'goldenrod'}}>HAIL SUN</div>}
      {test && moon}


      {feedbackList.map((feedback, index) => (
          <Header key={index} text={feedback.name} />
      ))}
    </div>
  );
}

export default App;
