import React, {useEffect, useState} from "react";
import {Helmet} from "react-helmet-async";
import {Link, useParams} from "react-router-dom";
import BackButton from "../components/BackButton";

const BigoStreamDaysPage = () => {
    const [bigoUserName, setBigoUserName] = useState("");
    const [streamDays, setStreamDays] = useState([]);
    const {siteId} = useParams();

    const fetchStreamDays = async (siteId) => {
        if (!siteId) {
            return;
        }
        try {
            const response = await fetch(process.env.REACT_APP_STREAM_DAYS_API + "?siteId=" + siteId);
            if (!response.ok) {
                return;
            }
            const data = await response.json();
            setBigoUserName(data.bigoUserName);
            setStreamDays(data.streamDays);
        } catch (error) {
            console.error("Error loading stream days:", error);
        }
    }

    useEffect(() => {
        void fetchStreamDays(siteId);
    }, [siteId]);

    return (<>
        <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=0.5"/>
            <title>Графики стримов {bigoUserName}</title>
        </Helmet>
        <h2>Графики стримов '{bigoUserName}'</h2>
        <div className={streamDays.length === 0 ? '' : 'days-container'}> {/* TODO width expanding by <h2> title*/}
            {streamDays.map((day, index) => (
                <div key={index}> {/* TODO make rotes smarter*/}
                    <Link className="cyber-button" to={"/bigo_stream_chart_daily/" + siteId + "/" + day}>{day}</Link>
                </div>
            ))}
        </div>
        <BackButton/>
    </>);
}

export default BigoStreamDaysPage;