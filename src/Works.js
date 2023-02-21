const Works = () => {
    return (
        <div className="works">
            <h2 style={{ color: "gray" }}>My Work</h2>
            <div>
                <li style={{ color: "#f1356d" }}>Taylor's Kitchen</li>
                <ul style={{ color: "white" }}>Taylor's Kitchen is our first Group Project from my BootCamp at UC Berkeley Extension. Our group members were myself, Isayah Durst, Frank Nguyen, Anthony Li ,and Benjamin Ha. It is a meal planning application wherein you can create a meal plan that's tailored to your specific diet preferences. Taylor's Kitchen allows you to customize your diets, cuisines, and food intolerances to your liking to recommend foods and recipes that compliment your tastes and needs.

                    Taylor's Kitchen was built using two different server-side APIs and is a complete front-end solution. Without having access to a back-end, we've leveraged local-storage and third-party data storage solutions to bring this project to life and create something that we found to be challenging, exciting, and useful. </ul>
                <button onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "https://isayahdurst.github.io/taylors-kitchen-meal-prep-app/";
                }} className="button">View Taylor's Kitchen</button>
                <li style={{ color: "#f1356d" }}>Media Map</li>
                <ul style={{ color: "white" }}>Myself, Aidan Espinoza, Braxton Waxdeck, and Charles Cox made this web app for our second project in the UC Berkreley Extension BootCamp. Media Map is a one-stop web-App wherein a user can search for the name of any given movie and the site will return a list of every streaming service that currently has that item available for streaming, and, if necessary, will sort the results based on whether the item is free to stream, free with your subscription, free with ads, charge to rent, or a charge to buy. Users are able to create an account to save their results, as well as create a list of their favorite movies, which the app then uses to populate a suggested list of movies in similar categories.

                    We built this project to alleviate the frustration of finding that special something to watch in today's digital age.
                    Gone will be the days where clickbait articles and misleading titles give you false or misleading Google search results. This app will tell you straight forward search results, where you can watch your favorite movies with ease and without having to sift through convoluted and fluffed up articles.</ul>
                <button onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "https://media-map-app.herokuapp.com/";
                }} className="button">View Media Map</button>
                <li style={{ color: "#f1356d" }}>Ray's GitHub Repo</li>
                <ul style={{ color: "white" }}>Click the button below to be taken directly to my GitHub Repository wherein you can see all of the projects I've worked on. Feel free to leave feedback on anything, any and al criticism, be it harsh or constructive, is welcome!</ul>
                <button onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "https://github.com/RayR124";
                }} className="button">Visit Ray's GitHub</button>
            </div>
        </div>
    )
}

export default Works;