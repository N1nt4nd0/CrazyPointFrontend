import {Link} from "react-router-dom";

const MainCard = () => {
    return (
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
            <Link className="card-link" to="/bigo_streamers">&gt; Таблица стримеров &lt;</Link>
            <Link className="card-link" to="/about">&gt; О сайте &lt;</Link>
        </div>
    );
}

export default MainCard;