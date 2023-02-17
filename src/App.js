import React, { useState } from "react";

function Portfolio() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = event => {
    event.preventDefault();

  };

  return (
    <div className="container">
      <h1>About Me</h1>
      <p>
        Write a brief introduction about yourself and your experience as a
        software developer.
      </p>

      <h2>My Work</h2>
      <p>
        Showcase your projects by linking to your Github repository or by
        providing a brief description of your projects.
      </p>

      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={event => setMessage(event.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Portfolio;
