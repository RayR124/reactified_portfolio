const Works = () => {
    return (
        <div className="works">
            <h2>My Work</h2>
            <p>
                <button onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "https://isayahdurst.github.io/taylors-kitchen-meal-prep-app/";
                }} className="button">Taylor's Kitchen</button>
                <button onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "https://media-map-app.herokuapp.com/";
                }} className="button">Media Map</button>
                <button onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "https://github.com/RayR124";
                }} className="button">Ray's GitHub</button>
            </p>
        </div>
    )
}

export default Works;