import React, {useEffect, useState} from "react";
import {Helmet} from "react-helmet-async";
import {Link} from "react-router-dom";

const Main = () => {
    const [avatarUrls, setAvatarUrls] = useState([]);
    const [avatarIndex, setAvatarIndex] = useState(0);

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

    useEffect(() => {
        fetch(process.env.REACT_APP_AVATARS_LIST_ENDPOINT)
            .then(response => response.json())
            .then(data => setAvatarUrls(data.avatars.map(a => a.avatarUrl)))
            .catch(error => console.error("Error loading avatars:", error));
    }, []);

    return (<>
        <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=0.9"/>
            <title>CrazyPoint</title>
        </Helmet>

        <div className="card">
            <img id="avatar" className="card-avatar" src="/images/default_avatar.jpg" alt="Avatar"/>
            <h1>Crazy Point (Торька)</h1>
            <p>Creative personality</p>
            <nav className="bauble-links">
                <a href="https://t.me/pu3r41k" title="Telegram"
                   target="_blank" rel="noopener noreferrer">
                    <img src="/images/social/telegram.png" alt="Telegram"/>
                </a>
                <a href="https://www.bigo.tv/user/933831125" title="BigoLive"
                   target="_blank" rel="noopener noreferrer">
                    <img src="/images/social/bigo_live.png" alt="BigoLive"/>
                </a>
            </nav>
            <nav className="bauble-links">
                <Link to="/donate" title="Donate">
                    <img src="/images/donate.png" alt="Donate"/>
                </Link>
            </nav>
            <Link className="card-link" to="/about">&gt; О сайте &lt;</Link>
        </div>
    </>);
};

export default Main;