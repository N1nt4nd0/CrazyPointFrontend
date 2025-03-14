import React from "react";
import {HelmetProvider} from "react-helmet-async";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Donate from "./pages/Donate";
import Main from "./pages/Main";

function App() {
    return (
        <HelmetProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/donate" element={<Donate/>}/>
                </Routes>
            </Router>
        </HelmetProvider>
    );
}

export default App;
