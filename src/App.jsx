import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [running, setRunning] = useState(false);

  const handleReset = () => {
    setCounter(0);
  };

  const toggleRunning = () => {
    setRunning(prevRunning => !prevRunning);
  };

  useEffect(() => {
    console.log("useEffect starting");
    let timerId;

   if (running) {
    timerId = setInterval(() => {
      setCounter(prevCount => prevCount + 1);
    }, 3000);
   }
    return () => {
      clearInterval(timerId);
    };
  }, [running]);
  return (
    <>
      <h1>Monday Assignment</h1>
      <div className="counter">Counter: {counter}</div>
      <div className="reset-button-div">
      <button onClick={toggleRunning}>START</button>
      <button onClick={toggleRunning}>STOP</button>
      <button onClick={handleReset}>RESET</button>
      </div>
    </>
  );
}

export default App;
