import { useState } from 'react'

import './App.css'

function App() {
    const[color , setColor] = useState("olive")

  return (
   <div className='w-full h-screen duration-200 mt-0'
   style={{backgroundColor: color}}
   >
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-2 px-2'>

    <div className='flex flex-wrap justify-center gap-2 shadow-lg bg-white rounded-md px-3 py-2'>

    <button 
    onClick={() => setColor("red")}
    className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
    style={{backgroundColor: "red"}}
    >Red</button>

    <button
    onClick={() => setColor("green")}
    className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
    style={{backgroundColor: "green"}}
    >Green</button>

    <button 
    onClick={() => setColor("yellow")}
    className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
    style={{backgroundColor: "yellow"}}
    >Yellow</button>

    <button
    onClick={() => setColor("brown")}
    className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
    style={{backgroundColor: "brown"}}
    >Brown</button>

    <button 
    onClick={() => setColor("purple")}
    className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
    style={{backgroundColor: "purple"}}
    >Purple</button>

    </div>

    </div>
   </div>
  )
}

export default App
