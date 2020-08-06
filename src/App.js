import React ,{useState}from 'react';
import './App.css';

function App() {
  const [num,setNum] = useState(0);  
  const Incr = () => {
    setNum(num + 1);
  }
  return (
    <div className="App">
     <h1>{num}</h1>
     <button onClick={Incr}>Click to Increase count</button>
    </div>
  );
}

export default App;
