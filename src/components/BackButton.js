import React from "react";
import {useNavigate} from "react-router-dom";

const BackButton = () => {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    return (<a className="cyber-button back-button" onClick={goBack}>Назад</a>);
};

export default BackButton;