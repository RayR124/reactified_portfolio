const Works = () => {
    return (
        <div className="works">
            <h2>My Work</h2>
            <div>
                <li>Taylor's Kitchen</li>
                <ul>Description of TK</ul>
                <button onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "https://isayahdurst.github.io/taylors-kitchen-meal-prep-app/";
                }} className="button">View Taylor's Kitchen</button>
                <li>Media Map</li>
                <ul>Description of MM</ul>
                <button onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "https://media-map-app.herokuapp.com/";
                }} className="button">View Media Map</button>
                <li>Ray's GitHub Repo</li>
                <ul>Description of Repo</ul>
                <button onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "https://github.com/RayR124";
                }} className="button">Visit Ray's GitHub</button>
            </div>
        </div>
    )
}

export default Works;