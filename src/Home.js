import React from 'react';
import logo from './Logo.png';

const Home = () => {

    return (
        <div className="home" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginRight: 25 }}>
            <h1 style={{ color: "blue", marginBottom: 20, fontSize: 45 }}>
                Ray's <span style={{ color: "#f1356d" }}>Portfolio</span> Web Page
            </h1>

            <h2 style={{ color: "red", marginBottom: 20, fontSize: 40 }}>
                Raymond Robinson
            </h2>

            <h3 style={{ color: "blue", marginBottom: 20, fontSize: 30 }}>
                <a style={{ color: "white" }} href="mailto:RealtorRayR@Gmail.com">RealtorRayR@Gmail.com</a>
            </h3>

            <h2 style={{ color: "gray", marginBottom: 15, fontSize: 30 }}>
                Father, Husband, Coder, Nerd, and Founder of "Raze Games".
            </h2>

            <ul style={{ color: "white", marginBottom: 15, fontSize: 20, fontWeight: 700 }}>
                <ul style={{ color: "white", marginBottom: 15, fontSize: 20, fontWeight: 700 }}>Hi, I'm Ray. And this is my Portfolio Web Page.
                </ul>
                <ul style={{ color: "white", marginBottom: 15, fontSize: 20, fontWeight: 700 }}>
                    Please note the dynamic changing background. This is sort of my calling-card for web pages in this early stage of my development as a software engineer. It is a feature I came up with and and quite proud of. Go ahead and refresh the page to give it a go!
                </ul>
            </ul>

            <img src={logo} alt="Raze Games" />

            <button onClick={(e) => {
                e.preventDefault();
                window.location.href = 'https://www.publicationcoach.com/better-at-following-directions';
            }} className="troll">Don't Click this button.</button>
        </div>
    );
}

export default Home;