import React, {useEffect, useState} from "react";
import {Helmet} from "react-helmet-async";
import MainCard from "../components/MainCard";

const MainPage = () => {
    const [avatarIndex, setAvatarIndex] = useState(0);
    const [avatarUrls, setAvatarUrls] = useState([]);

    useEffect(() => {
        if (avatarUrls.length === 0) {
            return
        }

        const avatar = document.getElementById("avatar");

        const changeAvatar = async () => {
            avatar.style.transition = "opacity 0.5s";
            avatar.style.opacity = "0";
            await new Promise(resolve => setTimeout(resolve, 500));
            avatar.src = avatarUrls[avatarIndex];
            avatar.onload = () => {
                avatar.style.opacity = "1";
            };
            setAvatarIndex(prevIndex => (prevIndex + 1) % avatarUrls.length);
        };

        const intervalId = setInterval(changeAvatar, 5000);
        return () => clearInterval(intervalId);
    }, [avatarUrls, avatarIndex]);

    const fetchAvatars = async () => {
        try {
            let fetchUrl = process.env.REACT_APP_AVATARS_LIST_API;
            const response = await fetch(fetchUrl);
            if (!response.ok) {
                return;
            }
            const data = await response.json();
            setAvatarUrls(data.avatars.map(avatar => avatar.avatarUrl))
        } catch (error) {
            console.error("Error loading avatars:", error)
        }
    }

    useEffect(() => void fetchAvatars(), []);

    return (<>
        <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=0.9"/>
            <title>Crazy Point</title>
        </Helmet>
        <MainCard/>
    </>);
}

export default MainPage;