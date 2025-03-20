import React from "react";
import BackButton from "../components/BackButton";
import Root from "../components/Root";

const ErrorPage = ({error}) => {
    return (<>
        <Root title={"Error"} scale={0.5}/>
        <h2>{error}</h2>
        <BackButton/>
    </>);
}

export default ErrorPage;