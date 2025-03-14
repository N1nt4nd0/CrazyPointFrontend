import React from "react";
import {Helmet} from "react-helmet-async";
import {Link} from "react-router-dom";

const Donate = () => {
    return (<>
        <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=0.9"/>
            <title>CrazyPoint - Donate</title>
        </Helmet>

        <div className="card">
            <h1>BelarusBank card</h1>
            <p>9112380175032152</p>
            <p>IBAN:</p>
            <p>BY56AKBB30340002088280070000</p>

            <h1>SberBank card</h1>
            <p>9112388039543587</p>
            <p>IBAN:</p>
            <p>BY43BPSB3014F000000010097002</p>

            <h1>PriorBank card (Visa)</h1>
            <p>4916989605624872</p>
            <p>IBAN:</p>
            <p>BY29PJCB30141070081017484933</p>

            <h1>PKOBank card (Visa)</h1>
            <p>4251250230037987</p>
            <p>ACCOUNT NUMBER:</p>
            <p>02102011270000180203850088</p>
            <p>IBAN:</p>
            <p>PL02102011270000180203850088</p>

            <h1>YooMoney wallet</h1>
            <p>4100117004369583</p>

            <h1>USDT (TRC20)</h1>
            <p>TA4uyqmmSXnRF8Z2UDQN1R4N1DkX88Ndk9</p>

            <nav className="bauble-links">
                <Link to="/" title="Home">
                    <img src="/images/home.png" alt="Home"/>
                </Link>
            </nav>
        </div>
    </>);
};

export default Donate;