import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const handleReset = () => {
    setCounter(0);
  };

  useEffect(() => {
    console.log("useEffect starting");
    let timerId = setInterval(() => {
      setCounter(prevCount => prevCount + 1);
    }, 3000);
    
    return () => {
      clearInterval(timerId);
    };
  }, []);
  return (
    <>
      <h1>Monday Assignment</h1>
      <div className="counter">Counter: {counter}</div>
      <div className="reset-button-div">
        <button onClick={handleReset}>RESET</button>
      </div>
    </>
  );
}

export default App;
