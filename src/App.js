import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Index from './pages/Index'
import EmployeesList from './pages/Employee'

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route exact path="/" element={<Index />}></Route>
                    <Route
                        exact
                        path="/employee"
                        element={<EmployeesList />}
                    ></Route>
                </Routes>
            </Router>
        </div>
    )
}

export default App
