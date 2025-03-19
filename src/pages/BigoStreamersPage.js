import React, {useEffect, useState} from "react";
import BackButton from "../components/BackButton";
import {Helmet} from "react-helmet-async";
import {Link} from "react-router-dom";
import Spinner from "../components/Spinner";

const BigoStreamersPage = () => {
    const [totalStreamers, setTotalStreamers] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [streamers, setStreamers] = useState([]);

    const fetchStreamers = async () => {
        try {
            let fetchUrl = process.env.REACT_APP_STREAMERS_LIST_API;
            const response = await fetch(fetchUrl);
            if (!response.ok) {
                return;
            }
            const data = await response.json();
            setTotalStreamers(data.bigoUsersTotal);
            setStreamers(data.bigoUsers);
        } catch (error) {
            console.error("Error loading streamers:", error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        void fetchStreamers();
        const interval = setInterval(fetchStreamers, 5000);
        return () => clearInterval(interval);
    }, []);

    return (<>
        <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=0.35"/>
            <title>Таблица стримеров BigoLive</title>
        </Helmet>
        {isLoading ? (
            <Spinner/>
        ) : (<>
            <h2>Таблица стримеров BigoLive</h2>
            <table className="table-container">
                <thead>
                <tr>
                    <th>Ник</th>
                    <th>Стримит сейчас</th>
                    <th>Ссылка BigoLive</th>
                    <th>Графики стримов</th>
                </tr>
                </thead>
                <tbody>
                {streamers.map((user, index) => (
                    <tr key={index}>
                        <td>{user.displayName}</td>
                        <td>
                            <div
                                className={user.streamingNow ? "streaming-indicator online" : "streaming-indicator offline"}></div>
                        </td>
                        <td>
                            <a className="cyber-button" href={user.userLink} target="_blank"
                               rel="noopener noreferrer">Перейти</a>
                        </td>
                        <td>
                            <Link className="cyber-button" to={"/bigo_stream_days/" + user.siteId}>Смотреть</Link>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <p>Всего стримеров: {totalStreamers}</p>
            <BackButton/>
        </>)}
    </>);
}

export default BigoStreamersPage;