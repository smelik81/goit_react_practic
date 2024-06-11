import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function String() {
  return <p>Hallo React!!!</p>
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <String />
    </>
  )
}



export default App
