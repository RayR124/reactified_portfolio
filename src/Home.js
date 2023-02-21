const Home = () => {

    return (
        <div className="home">
            <h1 style={{color: "blue", marginBottom: 20, fontSize: 45 }}>Ray's <span style={{color: "#f1356d" }}>Portfolio</span> Web Page</h1>
            <h2 style={{color: "gray", marginBottom: 15, fontSize: 30 }}>Coder, Father, Husband, Nerd, and Founder of "Raze Games".</h2>
                <p style={{color: "white", marginBottom: 15, fontSize: 20 }}>Hi, I'm Ray. And this is my Portfolio Web Page.</p>
                <button onClick={(e) => {
                    e.preventDefault();
                    window.location.href='https://www.publicationcoach.com/better-at-following-directions';
                }} className="button">Don't Click this button.</button>
            </div>
    );
}

export default Home;