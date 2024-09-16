import { useState } from 'react'
import viteLogo from '/vite.svg'
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home}/>
      </Routes>
    </BrowserRouter>
  )
}

export { viteLogo }
export default App
