import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import HotelForm from './components/HotelForm'
import Hotels from './components/Hotels'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      
      <>
      <div>
        <HotelForm/>
        <Hotels/>
      </div>
      </>
  )
}

export default App
