import React from 'react'
import './App.css'
import Card from './components/Card';

function App() {
 
  let myObj = {
    username: "sameer pathak",
    age: 21
  }

  return (
    <>
      <h1 className="bg-green-400 text-black  rounded-xl">hello sameer</h1>
      <Card  username = "sameer"/>
      <Card  username = "pathak"/>
    </>
  );
}

export default App
