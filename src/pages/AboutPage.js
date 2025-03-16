import React from "react";
import {Helmet} from "react-helmet-async";
import AboutCard from "../components/AboutCard";

const AboutPage = () => {
    return (<>
        <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=0.9"/>
            <title>Crazy Point - About</title>
        </Helmet>
        <AboutCard/>
    </>);
}

export default AboutPage;