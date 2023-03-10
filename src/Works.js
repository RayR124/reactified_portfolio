import React, { useState } from 'react';
import TK from './assets/TKscreenshot.png';
import MM from './assets/MMscreenshot.png';
import GH from './assets/GHscreenshot.png';
import WtW from './assets/WtWscreenshot.png';
import SZ from './assets/SZscreenshot.png';

const Works = () => {
    const [showTK, setShowTK] = useState(false);
    const [showMM, setShowMM] = useState(false);
    const [showGH, setShowGH] = useState(false);
    const [showWtW, setShowWtW] = useState(false);
    const [showSZ, setShowSZ] = useState(false);

    function toggleTK() {
        setShowTK(!showTK);
    }

    function toggleMM() {
        setShowMM(!showMM);
    }

    function toggleGH() {
        setShowGH(!showGH);
    }

    function toggleWtW() {
        setShowWtW(!showWtW);
    }

    function toggleSZ() {
        setShowSZ(!showSZ);
    }

    return (
        <div className="works" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginRight: 25 }}>
            <h2 style={{ color: 'gray', textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000" }}>My Work:</h2>
            <div>
                <li style={{ color: '#f1356d', fontWeight: 600, textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000" }}>SafeZone</li>
                <ul style={{ color: 'white', marginBottom: 20 }}
                    onClick={toggleSZ}>
                    <li style={{ color: 'white', marginBottom: 20, cursor: "pointer" }}>
                        {showSZ ? "Click again to hide the description." : "Click this text to read more about SafeZone."}
                    </li>
                    {showSZ && (
                        <li style={{ color: 'white', marginBottom: 20 }}>
                            SafeZone can tell you everything you might want to know about your perspective new home and it's neighborhood.
                            It provides information and reviews about neighborhood crime rates, tells you data on schools in the area, including the public reviews of those schools, and other things like local attractions or places of interest like nearby parks, museums, recreational areas, etc.<br></br><br></br>
                            SafeZone is and has a very practical application, as someone somewhere is always looking to buy or rent a new home.
                            Simply type in an address and SafeZone will give you the information in a clean and simple to understand layout. With SafeZone any new home buyer or renter will have a more informed idea of the area in which they're planning to live.
                        </li>
                    )}
                </ul>
                <a href="https://safezone.herokuapp.com/" target="_blank" rel="noreferrer">
                    <img style={{ height: 150, width: "auto", marginBottom: 20, borderRadius: 25, transition: "transform 0.2s ease-in-out" }} src={SZ} alt="Click to visit SafeZone" onMouseOver={(e) => {
                        e.currentTarget.style.transform = "scale(1.1)"
                    }} onMouseOut={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                    }} />
                </a>

                <li style={{ color: '#f1356d', fontWeight: 600, textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000" }}>Whether the Weather</li>
                <ul style={{ color: 'white', marginBottom: 20 }}
                    onClick={toggleWtW}>
                    <li style={{ color: 'white', marginBottom: 20, cursor: "pointer" }}>
                        {showWtW ? "Click again to hide the description." : "Click this text to read more about Whether the Weather."}
                    </li>
                    {showWtW && (
                        <li style={{ color: 'white', marginBottom: 20 }}>
                            I was challenged in this project to create a functional weather app wherein I would call on an API to get the current weather in any given city, as well as provide the weather forecast for the next 5 days in said city. I was motivated to accomplish this task by my peers, they assured me that these are skills I do possess, and by creating this application, I proved both them, and myself, right.<br></br><br></br> I built this project to better my skills using mechanics I was not intimitely familiar with, such as using 3rd party APIs, as well as performing more complex JavaScript to replace various aspects of my HTML. This project solved many problems, the leading one being giving me confidence in my skills and knowledge I didn't have before accomplishing this goal. I learned so much in this project! I learned how to modify classes in HTML with JS, I learned and/or functions, I learned how to implement APIs as well as various aspects of Bootstrap to aid with my design in my CSS, I learned how to stringify arrays with JSON and how to pull specific information from them. All of these are very important and vital skills to know when working with JS.
                        </li>
                    )}
                </ul>
                <a href="https://rayr124.github.io/whether_the_weather/" target="_blank" rel="noreferrer">
                    <img style={{ height: 150, width: "auto", marginBottom: 20, borderRadius: 25, transition: "transform 0.2s ease-in-out" }} src={WtW} alt="Click to visit Whether the Weather" onMouseOver={(e) => {
                        e.currentTarget.style.transform = "scale(1.1)"
                    }} onMouseOut={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                    }} />
                </a>

                <li style={{ color: '#f1356d', fontWeight: 600, textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000" }}>Taylor's Kitchen</li>
                <ul style={{ color: 'white', marginBottom: 20 }}
                    onClick={toggleTK}>
                    <li style={{ color: 'white', marginBottom: 20, cursor: "pointer" }}>
                        {showTK ? "Click again to hide the description." : "Click this text to read more about Taylor's Kitchen."}
                    </li>
                    {showTK && (
                        <li style={{ color: 'white', marginBottom: 20 }}>
                            Taylor's Kitchen is our first Group Project from my BootCamp at
                            UC Berkeley Extension. Our group members were <a style={{ color: 'white' }} href="https://github.com/RayR124">myself</a>, <a style={{ color: 'white' }} href="https://github.com/isayahdurst">Isayah Durst</a>, <a style={{ color: 'white' }} href="https://github.com/frankmng">Frank Nguyen</a>, <a style={{ color: 'white' }} href="https://github.com/lunchtimewhee">Anthony Li</a>, and <a style={{ color: 'white' }} href="https://github.com/Ahneb">Benjamin Ha</a>. It is a meal planning application wherein you can create a meal plan that's tailored to your specific diet preferences. Taylor's Kitchen allows you to customize your diets, cuisines, and food intolerances to your liking to recommend foods and recipes that compliment your tastes and needs.<br></br><br></br>Taylor's Kitchen was built using two different server-side APIs and is a complete front-end solution. Without having access to a back-end, we've leveraged local-storage and third-party data storage solutions to bring this project to life and create something that we found to be challenging, exciting, and useful. You can click the image below to be taken directly to the deployed site and check it out!
                        </li>
                    )}
                </ul>
                <a href="https://isayahdurst.github.io/taylors-kitchen-meal-prep-app/" target="_blank" rel="noreferrer">
                    <img style={{ height: 150, width: "auto", marginBottom: 20, borderRadius: 25, transition: "transform 0.2s ease-in-out" }} src={TK} alt="Click to visit Taylor's Kitchen" onMouseOver={(e) => {
                        e.currentTarget.style.transform = "scale(1.1)"
                    }} onMouseOut={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                    }} />
                </a>

                <li style={{ color: '#f1356d', fontWeight: 600, textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000" }}>Media Map</li>
                <ul style={{ color: 'white', marginBottom: 20 }}
                    onClick={toggleMM}>
                    <li style={{ color: 'white', marginBottom: 20, cursor: "pointer" }}>
                        {showMM ? "Click again to hide the description." : "Click this text to read more about Media Map."}
                    </li>
                    {showMM && (

                        <li style={{ color: "white", marginBottom: 20 }}>
                            <a style={{ color: 'white' }} href="https://github.com/RayR124">Myself</a>, <a style={{ color: "white" }} href="https://github.com/aidanespinosa">Aidan Espinoza</a>, <a style={{ color: "white" }} href="https://github.com/bbwax">Braxton Waxdeck</a>, and <a style={{ color: "white" }} href="https://github.com/CharlesCoxC3">Charles Cox III</a> made this web app for our second project in the UC Berkreley Extension BootCamp. Media Map is a one-stop web-App wherein a user can search for the name of any given movie and the site will return a list of every streaming service that currently has that item available for streaming, and, if necessary, will sort the results based on whether the item is free to stream, free with your subscription, free with ads, charge to rent, or a charge to buy. Users are able to create an account to save their results, as well as create a list of their favorite movies, which the app then uses to populate a suggested list of movies in similar categories.<br></br> <br></br>We built this project to alleviate the frustration of finding that special something to watch in today's digital age. Gone will be the days where clickbait articles and misleading titles give you false or misleading Google search results. This app will tell you straight forward search results, where you can watch your favorite movies with ease and without having to sift through convoluted and fluffed up articles. You can click the image below to be taken directly to the deployed site and check it out!
                        </li>
                    )}
                </ul>

                <a href="https://media-map-app.herokuapp.com/" target="_blank" rel="noreferrer">
                    <img style={{ height: 150, width: "auto", marginBottom: 20, borderRadius: 25, transition: "transform 0.2s ease-in-out" }} src={MM} alt="Click to visit Media Map" onMouseOver={(e) => {
                        e.currentTarget.style.transform = "scale(1.1)"
                    }} onMouseOut={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                    }} />
                </a>

                <li style={{ color: '#f1356d', fontWeight: 600, textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000" }}>Ray's GitHub Repository</li>
                <ul style={{ color: 'white', marginBottom: 20 }}
                    onClick={toggleGH}>
                    <li style={{ color: 'white', marginBottom: 20, cursor: "pointer" }}>
                        {showGH ? "Click again to hide the revealed text." : "Click this text to show more options."}
                    </li>
                    {showGH && (

                        <li style={{ color: "white", marginBottom: 20 }}>
                            Click the image below to be taken directly to my GitHub Repository wherein you can see all of the projects I've worked on throughout my training in the UC Berkeley Full Stack Online Coding Bootcamp. Feel free to leave feedback on anything, any and all criticism, be it harsh or constructive, is welcome!
                        </li>
                    )}
                </ul>

                <a href="https://github.com/RayR124" target="_blank" rel="noreferrer">
                    <img style={{ height: 150, width: "auto", marginBottom: 20, borderRadius: 25, transition: "transform 0.2s ease-in-out" }} src={GH} alt="Click to visit Media Map" onMouseOver={(e) => {
                        e.currentTarget.style.transform = "scale(1.1)"
                    }} onMouseOut={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                    }} />
                </a>
            </div>
        </div>
    )
}

export default Works;