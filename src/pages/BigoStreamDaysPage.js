import React from "react";
import {Link, useParams} from "react-router-dom";
import BackButton from "../components/BackButton";
import DataPage from "./DataPage";

const BigoStreamDaysPage = () => {
    const {siteId} = useParams();
    return (<>
        <DataPage
            title={"Дни стримов"}
            deviceScale={0.7}
            updatesUrl={process.env.REACT_APP_STREAM_DAYS_API + "?siteId=" + siteId}
            renderContent={(data) => (<>
                <h3>Стримы '{data.bigoUserName}'</h3>
                <div className={data.streamDays.length > 0 ? "days-container" : ""}>
                    {data.streamDays.map((day, index) => (
                        <div key={index}>
                            <Link className="cyber-button"
                                  to={"/bigo_stream_chart_daily/" + siteId + "/" + day}>
                                {day}
                            </Link>
                        </div>
                    ))}
                </div>
            </>)}
        />
        <BackButton/>
    </>);
}

export default BigoStreamDaysPage;