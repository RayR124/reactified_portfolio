const Navbar = () => {
    return (
        <nav className="directory">
            <h1 style={{ color: "blue", fontWeight: "largest" }}>
                Directory
            </h1>
            <div className="links">
                <a href="/">Home</a>
                <div className="links">
                    <a href="/AboutMe">About Me</a>
                    <div className="links">
                        <a href="/Works">My Projects</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;