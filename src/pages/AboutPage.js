import React from "react";
import AboutCard from "../components/AboutCard";
import HeaderRoot from "../components/HeaderRoot";

const AboutPage = () => {
    return (<>
        <HeaderRoot title={"About"} deviceScale={0.9}/>
        <AboutCard/>
    </>);
}

export default AboutPage;