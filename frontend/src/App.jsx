import { useState } from 'react'
import './App.css'
import Login from './pages/Login'
import Dashboard from "./pages/Dashbaord";

function App() {
  const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
