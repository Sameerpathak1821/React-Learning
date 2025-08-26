import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
  let [message , setMessage] = useState("");

  // useState hook for counter increasing
  const addvalue = () => {
    if(counter < 20){
        setCounter(counter + 1);
        setMessage("");
    }
    else{
      setMessage("maximum limit is reached")
    }
  };

  // useState hook for counter decreasing
  const removeValue = () => {
    if(counter > 0){
       setCounter(counter - 1);
       setMessage("")
    }
    else{
      setMessage("minimim limit is reached")
    }
  };

  return (
    <>
      <h1>Sameer Pathak</h1>
      <h2>counter value : {counter}</h2>

      <button onClick={addvalue}>Add Value {counter}</button>
      <br />
      <br />

      <button onClick={removeValue}>Decrease Value {counter}</button>
      {message && <p style={{ color: "red", fontWeight: "bold" }}>{message}</p>}

      <p>footer: {counter}</p>
    </>
  );
}

export default App;
