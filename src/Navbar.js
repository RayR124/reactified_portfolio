const Navbar = () => {
    return (
        <nav className="links">
            <h1 style={{ color: "blue", fontSize: 30 }}>
                Directory:
            </h1>
            <div className="links">
                <a href="#">Home</a>
                <div className="links">
                    <a href="#AboutMe">About Me</a>
                    <div className="links">
                        <a href="#Works">My Projects</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;