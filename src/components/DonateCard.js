import {Link} from "react-router-dom";
import React from "react";

const DonateCard = () => {
    return (
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
                <h1>YooMoney</h1>
                <p>CARD NUMBER:</p>
                <p>2204120200046254</p>
                <p>WALLET:</p>
            <p>4100117004369583</p>
            <h1>USDT (TRC20)</h1>
            <p>TA4uyqmmSXnRF8Z2UDQN1R4N1DkX88Ndk9</p>
            <nav className="bauble-links">
                <Link to="/" title="Home">
                    <img src="/images/home.png" alt="Home"/>
                </Link>
            </nav>
        </div>
    );
}

export default DonateCard;