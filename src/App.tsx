import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import HomePage from './pages/HomePage';
import About from './pages/About';
import Booking from './pages/Booking';
import GatePage from './pages/GatePage';
import Contact from './pages/Contact';
import Navbar from './components/Sidebar';


const App: React.FC = () => {
    return (
        <Router>
            <div className="flex">
                <Navbar navText1='Home' navText2='About' navText3='Gate Display' navText4='Booking' navText5='Contact' />
                <div className="flex-grow p-10">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/booking" element={<Booking />} />
                        <Route path="/gatepage" element={<GatePage />} />
                        <Route path="/Contact" element={<Contact />} />
                        
                      
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
