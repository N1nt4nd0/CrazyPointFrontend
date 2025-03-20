import React from "react";
import BackButton from "../components/BackButton";
import {Link} from "react-router-dom";
import DataPage from "./DataPage";

const BigoStreamersPage = () => {
    return (<>
        <DataPage
            title={"Таблица стримеров BigoLive"}
            deviceScale={0.4}
            updatesUrl={process.env.REACT_APP_STREAMERS_LIST_API}
            updateInterval={5000}
            renderContent={(data) => (<>
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
                    {data.bigoUsers.map((user, index) => (
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
                <p>Всего стримеров: {data.bigoUsersTotal}</p>
            </>)}
        />
        <BackButton/>
    </>);
}

export default BigoStreamersPage;