import React from "react";
import {useParams} from "react-router-dom";
import StreamChartDaily from "../components/StreamChartDaily";
import DataPage from "./DataPage";

const BigoStreamChartDailyPage = () => {
    const {siteId, day} = useParams();
    return (
        <DataPage
            title={"График стримов"}
            deviceScale={0.5}
            updatesUrl={process.env.REACT_APP_STREAM_CHART_DAILY_API + "?siteId=" + siteId + "&day=" + day}
            renderContent={(data) => (<>
                <h3>Стримы '{data.bigoUserName}' за '{day}'</h3>
                <div className="chart-container">
                    <StreamChartDaily chartData={data.chartData}/>
                </div>
                <p>Всего за день - {data.totalDailyTime}</p>
            </>)}
        />
    );
}

export default BigoStreamChartDailyPage;