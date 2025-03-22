import React from "react";
import SpinnerPage from "./SpinnerPage";
import ErrorPage from "./ErrorPage";
import useFetchData from "../hooks/useFetchData";
import HeaderRoot from "../components/HeaderRoot";
import BackButton from "../components/BackButton";

const DataPage = ({title, deviceScale = 1, updatesUrl, updateInterval = 0, renderContent}) => {
    const {data, isFirstLoading, error} = useFetchData(updatesUrl, updateInterval);
    if (isFirstLoading) {
        return <SpinnerPage title={title}/>;
    }
    if (error) {
        return <ErrorPage error={error}/>;
    }
    return (<>
        <HeaderRoot title={title} deviceScale={deviceScale}/>
        {renderContent(data)}
        <BackButton/>
    </>);
}

export default DataPage;
