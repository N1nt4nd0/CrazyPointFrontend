import React from "react";
import BackButton from "../components/BackButton";
import HeaderRoot from "../components/HeaderRoot";

const ErrorPage = ({error}) => {
    return (<>
        <HeaderRoot title={"Error"} deviceScale={0.5}/>
        <h2>{error}</h2>
        <BackButton/>
    </>);
}

export default ErrorPage;