import React, {useEffect, useState} from "react";
import {Helmet} from "react-helmet-async";
import {useParams} from "react-router-dom";
import BackButton from "../components/BackButton";
import StreamChartDaily from "../components/StreamChartDaily";
import Spinner from "../components/Spinner";

const BigoStreamChartDailyPage = () => {
    const [totalDailyTime, setTotalDailyTime] = useState("");
    const [bigoUserName, setBigoUserName] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [chartData, setChartData] = useState([]);
    const {siteId, day} = useParams();

    const fetchStreamDailyData = async (siteId, day) => {
        if (!siteId || !day) {
            return;
        }
        try {
            const fetchUrl = process.env.REACT_APP_STREAM_CHART_DAILY_API + "?siteId=" + siteId + "&day=" + day;
            const response = await fetch(fetchUrl);
            if (!response.ok) {
                return;
            }
            const data = await response.json();
            setTotalDailyTime(data.totalDailyTime);
            setBigoUserName(data.bigoUserName);
            setChartData(data.chartData);
        } catch (error) {
            console.error("Error loading stream daily data:", error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        void fetchStreamDailyData(siteId, day);
    }, [siteId, day]);

    return (<>
        <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=0.5"/>
            <title>Стримы {bigoUserName}</title>
        </Helmet>
        {isLoading ? (
            <Spinner/>
        ) : (<>
            <h2>Стримы '{bigoUserName}' за '{day}'</h2>
            <div className="chart-container">
                <StreamChartDaily chartData={chartData}/>
            </div>
            <p>Всего за день - {totalDailyTime}</p>
            <BackButton/>
        </>)}
    </>);
}

export default BigoStreamChartDailyPage;