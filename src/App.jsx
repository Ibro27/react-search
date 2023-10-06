import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Searchbox from './Searchbox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Searchbox/>
    </>
  )
}

export default App
