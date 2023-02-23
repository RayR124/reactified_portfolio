import React from 'react';
import logo from './assets/rotatinglogo.gif';

const Home = () => {

    return (
        <div className="home" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginRight: 25 }}>
            <h1 style={{ color: "blue", marginBottom: 20, fontSize: 45 }}>
                Ray's <span style={{ color: "#f1356d" }}>Portfolio</span> Web Page
            </h1>

            <h2 style={{ color: "red", marginBottom: 20, fontSize: 40 }}>
                - Raymond Robinson -
            </h2>

            <h3 style={{ color: "blue", marginBottom: 20, fontSize: 30 }}>
                <a style={{ color: "white" }} href="mailto:RealtorRayR@Gmail.com">RealtorRayR@Gmail.com</a>
            </h3>

            <h2 style={{ color: "gray", marginBottom: 15, fontSize: 30 }}>
                Father, Husband, Coder, Nerd, and Founder of <span style={{ color: "#f1356d", fontWeight: 800 }}>Raze Games</span>.
            </h2>

            <ul style={{ color: "white", marginBottom: 15, fontSize: 20, fontWeight: 700, borderBottom: "1px solid #f2f2f2" }}>
                Hi, I'm Ray. And this is my Portfolio Web Page.
            </ul>

            <li style={{ color: "white", marginBottom: 1, fontSize: 20, fontWeight: 700 }}>
                Please note the dynamic changing background. This is sort of my calling-card for web pages in this early stage of my development as a software engineer.<br></br>It is a feature I came up with and and quite proud of.<br></br>Go ahead and <span style={{color: "blue"}}>refresh</span> the page to give it a go!
            </li>

            <img style={{ height: 350, width: "auto" }} src={logo} alt="Raze Games" />

            <button onClick={(e) => {
                e.preventDefault();
                window.open('https://www.publicationcoach.com/better-at-following-directions', '_blank', 'noreferrer');
            }} className="troll" target="_blank" rel="noreferrer">Don't Click this button.</button>
        </div>
    );
}

export default Home;