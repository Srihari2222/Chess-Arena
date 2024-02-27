import React from 'react';
import TwoPlayer from './TwoPlayer';
import Home from './Home';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";

function App() {
    return (
        <>
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/multiplayer" element={<TwoPlayer/>} ></Route>
            </Routes>
        </Router>
        </>
    )
}

export default App