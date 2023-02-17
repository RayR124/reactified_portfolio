import { useState } from 'react';

const Home = () => {
const [thing, setThing] = useState('base data, changable');
const someFunction = () =>{
    setThing('updated data here');
}

    return (
        <div className="home">
            <h1>Home Page</h1>
            <h2>About Me</h2>
            <p>
                fill this out later, {thing}
            </p>
            <button onClick={someFunction.thing}>this button sucks.</button>
            <button onClick={(e) => {e.preventDefault();
            window.location.href='https://www.publicationcoach.com/better-at-following-directions';
            }}className="troll">Don't Click this button.</button>
        </div>
    );
}

export default Home;