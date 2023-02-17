const Navbar = () => {
    return ( 
        <nav className="directory">
            <h1 style={{color: "blue", fontWeight: "largest"}}>
                Directory
            </h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/AboutMe">About Me</a>
                <a href="/Works">My Projects</a>
            </div>
        </nav>  
     );
}
 
export default Navbar;