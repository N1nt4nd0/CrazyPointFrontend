import {Link} from "react-router-dom";
import React from "react";

const AboutCard = () => {
    return (
        <div className="card">
            <h1>Author contacts</h1>
            <p>feodor.kekovich@gmail.com</p>

            <h1>Backend stack</h1>
            <p>Spring [Web, Security]</p>
            <p>Java 17</p>
            <p>Gradle</p>
            <p>Mongo DB</p>
            <p>Redis</p>
            <p>RabbitMQ</p>
            <p>Swagger</p>
            <p>Telegram bots</p>
            <p>Docker</p>

            <h1>Frontend stack</h1>
            <p>Node.js</p>
            <p>React</p>
            <p>Docker</p>

            <h1>Cloud solutions</h1>
            <p>GitHub [VCS, Actions]</p>
            <p>Railway (Deploy)</p>
            <p>Spaceship (Domain)</p>

            <nav className="bauble-links">
                <Link to="/" title="Home">
                    <img src="/images/home.png" alt="Home"/>
                </Link>
            </nav>
        </div>
    );
}

export default AboutCard;