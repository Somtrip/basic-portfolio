import { useState } from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Hey</h1>
      <Header />
    </div>
  )
}

export default App
