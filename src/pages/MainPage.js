import React, {useEffect, useState} from "react";
import MainCard from "../components/MainCard";
import useFetchData from "../hooks/useFetchData";
import HeaderRoot from "../components/HeaderRoot";

const MainPage = () => {
    const [avatarIndex, setAvatarIndex] = useState(0);
    const {data} = useFetchData(process.env.REACT_APP_AVATARS_LIST_API);
    const avatarUrls = data?.avatars?.map(avatar => avatar.avatarUrl) || [];

    useEffect(() => {
        if (avatarUrls.length === 0) {
            return;
        }

        const avatar = document.getElementById("avatar");

        const changeAvatar = async () => {
            avatar.style.transition = "opacity 0.5s";
            avatar.style.opacity = "0";
            await new Promise(resolve => setTimeout(resolve, 500));
            avatar.src = avatarUrls[avatarIndex];
            avatar.onload = () => {
                avatar.style.opacity = "1";
            }
            setAvatarIndex(prevIndex => (prevIndex + 1) % avatarUrls.length);
        }

        const intervalId = setInterval(changeAvatar, 5000);
        return () => clearInterval(intervalId);
    }, [avatarUrls, avatarIndex]);

    return (<>
        <HeaderRoot title={"Crazy Point"} deviceScale={0.9}/>
        <MainCard/>
    </>);
}

export default MainPage;