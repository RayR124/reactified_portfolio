const Home = () => {

    return (
        <div className="home">
            <h1 style={{color: "blue"}}>Ray's <span style={{color: "#f1356d"}}>Portfolio</span> Web Page</h1>
            <h2 style={{color: "gray"}}>Coder, Father, Husband, Nerd, and Founder of "Raze Games".</h2>
                <p style={{color: "white"}}>Hi, I'm Ray. And this is my Portfolio Web Page.</p>
                <button onClick={(e) => {
                    e.preventDefault();
                    window.location.href='https://www.publicationcoach.com/better-at-following-directions';
                }} className="troll">Don't Click this button.</button>
            </div>
    );
}

export default Home;