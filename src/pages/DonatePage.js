import React from "react";
import DonateCard from "../components/DonateCard";
import HeaderRoot from "../components/HeaderRoot";

const DonatePage = () => {
    return (<>
        <HeaderRoot title={"Donate"} deviceScale={0.9}/>
        <DonateCard/>
    </>);
}

export default DonatePage;