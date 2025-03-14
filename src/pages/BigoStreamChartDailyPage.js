import React, {useEffect, useState} from "react";
import {Helmet} from "react-helmet-async";
import {useParams} from "react-router-dom";
import BackButton from "../components/BackButton";

const BigoStreamChartDailyPage = () => {
    const [totalDailyTime, setTotalDailyTime] = useState("");
    const [bigoUserName, setBigoUserName] = useState("");
    const [chartData, setChartData] = useState([]);
    const {siteId, day} = useParams();

    const fetchStreamDailyData = async (siteId, day) => {
        if (!siteId || !day) {
            return;
        }
        try {
            const response = await fetch(process.env.REACT_APP_STREAM_CHART_DAILY_API + "?siteId=" + siteId + "&day=" + day);
            if (!response.ok) {
                return;
            }
            const data = await response.json();
            setTotalDailyTime(data.totalDailyTime);
            setBigoUserName(data.bigoUserName);
            setChartData(data.chartData);
        } catch (error) {
            console.error("Error loading stream daily data:", error);
        }
    }

    useEffect(() => {
        void fetchStreamDailyData(siteId, day);
    }, [siteId, day]);

    return (<>
        <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=0.5"/>
            <title>Активность {bigoUserName}</title>
        </Helmet>
        <h2>Стримы '{bigoUserName}' за '{day}'</h2>
        <p>{totalDailyTime}</p>
        <p>${JSON.stringify(chartData)}</p>
        <BackButton/>
    </>);
}

export default BigoStreamChartDailyPage;