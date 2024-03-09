import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Posts from './posts'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <h3> React Core Concepts Recap</h3>
      
      <ol>
        <li>Components</li>
        <li>Jsx</li>
        <li>Props</li>
        <li>Even Handler</li>
        <li>State</li>
        <li>load data</li>
      </ol>
      <hr/>
      <Posts></Posts>
     
    </>
  )
}

export default App
