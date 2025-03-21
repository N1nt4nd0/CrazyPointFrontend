import React from "react";
import {useHistory} from "react-router-dom";

const BackButton = () => {
    const history = useHistory();
    const goBack = () => history.goBack();
    return (
        <div>
            <a className="cyber-button back-button" onClick={goBack}>Назад</a>
        </div>
    );
}

export default BackButton;