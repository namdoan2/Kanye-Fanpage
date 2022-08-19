import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';
import App from './App';
import NavBar from './components/NavBar';
import Music from './components/Music';
import ClothingBrand from './components/ClothingBrand';

const RouteSwitch = () => {
    return(
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<App />}/>
                <Route path="/music" element={<Music />}/>
                <Route path="/fashion" element={<ClothingBrand />}/>
            </Routes>
        </Router>
    )
}

export default RouteSwitch;