import { useState } from 'react';
import raze from './RazeLogo.png';

const AboutMe = () => {
    const [blurb] = useState();

    return (
        <div className="aboutMe" key={blurb} style={{ marginRight: 25 }}>
            <h1 style={{ color: "gray", fontSize: 45, marginBottom: 15, textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"}}>
                A little about Me:
                </h1>

            <li style={{ color: "white", marginBottom: 15 }}>
                I am first and foremost a father to 3 amazing children. Being a father is the only job I take
                more seriously than being a husband. My family if my life, and it is this mentality that pushes
                me to be better every day. I do it for them. When I am not partaking in one of my many
                responsibilites I like to spend my free time designing in any which way my brain prefers at any
                given moment. Sometimes that may mean coding, other times it may mean designing new cards for a
                game I'm working on. And other days it may mean drafting a story for the world and background of
                one of my games.
            </li>

            <li style={{ color: "white", marginBottom: 15 }}>
                I have yet to publish any of my 19 original board and/or card games, but I feel I am getting close to completion with at least a couple of them. I am particularly proud of my game called <a style={{ color: "red" }} href="https://www.thegamecrafter.com/games/vex1">Vex</a> which I hope hits the market in some way, shape, or form by next year.
            </li>

            <li style={{ color: "white", marginBottom: 15 }}>
                I thoroughly enjoy puzzle solving and working on my board and card games gives me many creative
                outlets to solve puzzles, and find unique and enjoyable solutions to problems that rise up
                during almost every play-testing session. These are not, however, set backs. Every opportunity
                for growth makes my game that much better, and that much closer to being "ready" for the
                public... Sadly, however, my constant need to drive for perfection will always result in finding
                another flaw, and finding another solution.
            </li>

            <li style={{ color: "white", marginBottom: 15 }}>
                One day, the world will be introduced to <span style={{ color: "#f1356d", fontWeight: 600 }}>Raze Games</span>. And for all my doubts, that day can not
                come soon enough!
            </li>
            <img src={raze} alt="Raze Games"/>
        </div>
    );
}

export default AboutMe;