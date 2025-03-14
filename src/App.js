import React from "react";
import {HelmetProvider} from "react-helmet-async";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import BigoStreamChartDailyPage from "./pages/BigoStreamChartDailyPage";
import BigoStreamDaysPage from "./pages/BigoStreamDaysPage";
import BigoStreamersPage from "./pages/BigoStreamersPage";
import DonatePage from "./pages/DonatePage";
import AboutPage from "./pages/AboutPage";
import MainPage from "./pages/MainPage";

// TODO Make ChartDaily template component with needed fills

function App() {
    return (
        <HelmetProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/donate" element={<DonatePage/>}/>
                    <Route path="/bigo_streamers" element={<BigoStreamersPage/>}/>
                    <Route path="/bigo_stream_days/:siteId" element={<BigoStreamDaysPage/>}/>
                    <Route path="/bigo_stream_chart_daily/:siteId/:day" element={<BigoStreamChartDailyPage/>}/>
                </Routes>
            </Router>
        </HelmetProvider>
    );
}

export default App;
