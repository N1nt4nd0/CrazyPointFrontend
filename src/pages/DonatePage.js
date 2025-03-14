import React from "react";
import {Helmet} from "react-helmet-async";
import DonateCard from "../components/DonateCard";

const Donate = () => {
    return (<>
        <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=0.9"/>
            <title>Crazy Point - Donate</title>
        </Helmet>
        <DonateCard/>
    </>);
}

export default Donate;