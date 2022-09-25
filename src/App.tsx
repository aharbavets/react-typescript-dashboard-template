import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import SideBar from './components/Sidebar'
import sidebar_menu from './constants/sidebar-menu'

import './App.css'
import Items from './pages/Items'

function App() {
    return (
        <Router>
            <div className="dashboard-container">
                <SideBar menu={sidebar_menu}/>

                <div className="dashboard-body">
                    <Routes>
                        <Route path="*" element={<div></div>}/>
                        <Route path="/" element={<div></div>}/>
                        <Route path="/items" element={<Items/>}/>
                    </Routes>
                </div>
            </div>
        </Router>
    )
}

export default App
