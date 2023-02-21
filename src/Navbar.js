import React from "react";

function Navbar(props) {
    return (
        <nav className="links">
            <h1 style={{ color: "blue", fontSize: 30, marginBottom: 10 }}>
                Directory:
            </h1>
            <ul>
                <li className="links">
                    <a href="#" onClick={props.toggleHome} style={{ borderBottom: "1px solid #f2f2f2" }}>Home</a>
                </li>
                <li className="links">
                    <a href="#" onClick={props.toggleAboutMe} style={{ borderBottom: "1px solid #f2f2f2" }}>About Me</a>
                </li>
                <li className="links">
                    <a href="#" onClick={props.toggleWorks} style={{ borderBottom: "1px solid #f2f2f2" }}>Works</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;