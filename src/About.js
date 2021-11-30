import "./App.css";

function About() {
  return (
    <div className="App">
      <h3>About</h3>
      <div id="about-content" className="post-display">
        <p>
          Hey there, I'm Daniel. A software engineer focused primarily on web
          development.
        </p>
        <p>This blog is where I pretend to be an expert at things, and where I ask questions and express my complaints about things too.</p>
        <p>
          I enjoying coding in Node.js, and like using it along with relational databases in a lot of my personal
          applications. I also like to dabble in Unity sometimes and contribute to open source projects when I have the chance.
        </p>
        <p>Follow me on <a href="https://github.com/HappyZombies" target="_blank" rel="noopener noreferrer">GitHub</a> where I come up with my latest idea and never finish it!</p>
      </div>
    </div >
  );
}

export default About;
