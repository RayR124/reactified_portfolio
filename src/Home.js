const Home = () => {

    return (
        <div className="home">
            <h1>Home Page</h1>
                <button onClick={(e) => {
                    e.preventDefault();
                    window.location.href='https://www.publicationcoach.com/better-at-following-directions';
                }} className="troll">Don't Click this button.</button>
            </div>
    );
}

export default Home;