import React from "react";
import {Helmet} from "react-helmet-async";
import {Link} from "react-router-dom";

const About = () => {
    return (<>
        <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=0.9"/>
            <title>Crazy Point - About</title>
        </Helmet>

        <div className="card">
            <h1>Author contacts</h1>
            <p>feodor.kekovich@gmail.com</p>

            <h1>Technology Stack</h1>
            <p>Spring [Web, Security]</p>
            <p>Java 17</p>
            <p>Gradle</p>
            <p>Hibernate</p>
            <p>Mongo DB</p>
            <p>Redis</p>
            <p>Thymeleaf</p>
            <p>Swagger</p>
            <p>Telegram bots</p>

            <h1>Cloud solutions</h1>
            <p>GitHub [Code Base]</p>
            <p>Spaceship [Domain]</p>
            <p>Upstash [Redis, QStash]</p>
            <p>Heroku [Deploying Platform]</p>

            <nav className="bauble-links">
                <Link to="/" title="Home">
                    <img src="/images/home.png" alt="Home"/>
                </Link>
            </nav>
        </div>
    </>);
};

export default About;