import React, {useEffect, useState} from "react";
import BackButton from "../components/BackButton";
import {Helmet} from "react-helmet-async";
import {Link} from "react-router-dom";

const BigoStreamersPage = () => {
    const [totalStreamers, setTotalStreamers] = useState(0);
    const [streamers, setStreamers] = useState([]);

    const fetchStreamers = async () => {
        try {
            const response = await fetch(process.env.REACT_APP_STREAMERS_LIST_API);
            if (!response.ok) {
                return;
            }
            const data = await response.json();
            setTotalStreamers(data.bigoUsersTotal);
            setStreamers(data.bigoUsers);
        } catch (error) {
            console.error("Error loading streamers:", error);
        }
    }

    useEffect(() => {
        void fetchStreamers();
        const interval = setInterval(fetchStreamers, 5000);
        return () => clearInterval(interval);
    }, []);

    return (<>
        <Helmet>
            <title>Таблица стримеров BigoLive</title>
        </Helmet>
        <h2>Таблица стримеров BigoLive</h2>
        <div className="table-container">
            <table>
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
                            <Link className="cyber-button" to={`/bigo_stream_days/${user.siteId}`}>Смотреть</Link>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        <p>Всего стримеров: {totalStreamers}</p>
        <BackButton/>
    </>);
};

export default BigoStreamersPage;