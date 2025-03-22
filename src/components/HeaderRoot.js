import React from "react";
import {Helmet} from "react-helmet-async";

const HeaderRoot = ({title, deviceScale = 1}) => {
    return (<>
        <Helmet>
            <meta name="viewport" content={`width=device-width, initial-scale=${deviceScale}`}/>
            <title>{title}</title>
        </Helmet>
    </>);
}

export default HeaderRoot;