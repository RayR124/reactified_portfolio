import { useState } from 'react';

const Home = () => {
    const [blurb, setBlurb] = useState('Insert About Me blurb here');

    return (
        <div className="home">
            <h1>Home Page</h1>
            <h2>About Me</h2>
            <div className="blurb" key={blurb}>
                <p>
                    {blurb}
                </p>
                <button onClick={(e) => {
                    e.preventDefault();
                    window.location.href='https://www.publicationcoach.com/better-at-following-directions';
                }} className="troll">Don't Click this button.</button>
            </div>
        </div>
    );
}

export default Home;