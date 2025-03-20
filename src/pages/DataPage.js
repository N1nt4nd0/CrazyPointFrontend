import React from "react";
import Spinner from "../components/Spinner";
import ErrorPage from "./ErrorPage";
import useFetchData from "../hooks/useFetchData";
import Root from "../components/Root";

const DataPage = ({title, deviceScale = 1, updatesUrl, updateInterval = 0, renderContent}) => {
    const {data, isFirstLoading, error} = useFetchData(updatesUrl, updateInterval);
    if (isFirstLoading) {
        return <Spinner/>;
    }
    if (error) {
        return <ErrorPage error={error}/>;
    }
    return (<>
        <Root title={title} deviceScale={deviceScale}/>
        {renderContent(data)}
    </>);
}

export default DataPage;
