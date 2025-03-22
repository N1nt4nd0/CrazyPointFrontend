import React from "react";
import HeaderRoot from "../components/HeaderRoot";

const SpinnerPage = ({title}) => {
    return (<>
        <HeaderRoot title={title}/>
        <div className="spinner">
            <div className="spinner-circle"></div>
        </div>
    </>);
}

export default SpinnerPage;