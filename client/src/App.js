import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import CreateSkill from "./pages/CreateSkill"
import MySkills from "./pages/MySkills"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import "./main.css"
import { UserProvider } from "./context/UserContext"

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-skill" element={<CreateSkill />} />
            <Route path="/my-skills" element={<MySkills />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  )
}

export default App
