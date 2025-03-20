import React from "react";
import AboutCard from "../components/AboutCard";
import Root from "../components/Root";

const AboutPage = () => {
    return (<>
        <Root title={"About"} deviceScale={0.9}/>
        <AboutCard/>
    </>);
}

export default AboutPage;