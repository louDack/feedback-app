import Header from "./components/Header"

function App() {
  const test = true
  const background = {backgroundColor: 'blue'}
  const feedbackList = [
    {name: 'Anri Okita', id: 1},
    {name: 'Hitomi Tanaka', id: 2},
    {name: 'Nanako Mori', id: 3}
  ]

  let color
  let moon = <div style={{backgroundColor: 'silver'}}>HAIL MOON</div>

  // Goal: Conditional everything!
  
  return (
    <div style={background}>
      <Header text='World'/>
      <h1>Fuck you, fackin' pussy!</h1>
      
      {/* What the fk is this? */}
      {color = test ? 'red' : 'blue'}
      {console.log(color)}

      {test ? 'You suck' : 'Lick booogers.'}
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
