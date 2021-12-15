import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from '../Pages/Home/Home.js'
import SignUp from '../Pages/SignUp/SignUp.js'
import Login from '../Pages/Login/Login.js'
import NavBar from '../Components/NavBar'
import { useAuthContext } from '../Hooks/useAuthContext'

function App() {
    const { authIsReady, user } = useAuthContext()
    return (
        <div className="App">
            {authIsReady && (
                <BrowserRouter>
                <NavBar />
                    <Routes>

                    {/* ROUTES 

                        When user logged in, redirect to home page
                        If not, redirect to login page

                        When user logged out, redirect to login page
                        If not, redirect to home page

                        When user logged in and the sign up button is clicked, redirect to home page
                        If not, redirect to sign up page 
                        
                    */}

                        <Route path="/" element={!user ? <Navigate replace to="/login" /> : <Home />} />
                        <Route path="/signup" element={user ? <Navigate replace to="/" /> : <SignUp />} />
                        <Route path="/login" element={user ? <Navigate replace to="/" /> : <Login />} />
                    </Routes>
                </BrowserRouter>
            )}                      
        </div>
    )
}

export default App