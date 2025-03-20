import React from "react";
import DonateCard from "../components/DonateCard";
import Root from "../components/Root";

const DonatePage = () => {
    return (<>
        <Root title={"Donate"} deviceScale={0.9}/>
        <DonateCard/>
    </>);
}

export default DonatePage;