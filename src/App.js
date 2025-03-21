import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import BigoStreamChartDailyPage from "./pages/BigoStreamChartDailyPage";
import BigoStreamDaysPage from "./pages/BigoStreamDaysPage";
import BigoStreamersPage from "./pages/BigoStreamersPage";
import DonatePage from "./pages/DonatePage";
import AboutPage from "./pages/AboutPage";
import MainPage from "./pages/MainPage";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={MainPage}/>
                <Route path="/about" component={AboutPage}/>
                <Route path="/donate" component={DonatePage}/>
                <Route path="/bigo_streamers" component={BigoStreamersPage}/>
                <Route path="/bigo_stream_days/:siteId" component={BigoStreamDaysPage}/>
                <Route path="/bigo_stream_chart_daily/:siteId/:day" component={BigoStreamChartDailyPage}/>
            </Switch>
        </Router>
    );
}

export default App;