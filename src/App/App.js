import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home/Home.js'
import SignUp from '../Pages/SignUp/SignUp.js'
import Login from '../Pages/Login/Login.js'
import NavBar from '../Components/NavBar'
import { useAuthContext } from '../Hooks/useAuthContext'

function App() {
    const { authIsReady } = useAuthContext()
    return (
        <div className="App">
            {authIsReady && (
                <BrowserRouter>
                <NavBar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </BrowserRouter>
            )}
        </div>
    )
}

export default App