import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="page home-page">
      <div className="home-shell">
        <section className="hero-panel">
          <div className="hero-copy">
            <h1>Teja Gowthu</h1>
            <p className="headline">B.Tech AI/ML student building futuristic web applications, full-stack solutions, and intelligent systems. Currently in 3rd year at Aditya University with strong competitive programming and development experience.</p>
          </div>
          <div className="hero-meta">
            <div><strong>AI/ML Student</strong> • Aditya University, 2024–2028</div>
            <div><strong>400+ problems</strong> solved on CodeChef & LeetCode</div>
            <div><strong>Focus:</strong> Python, Java, React, Node.js, SQL, MongoDB</div>
          </div>
          <div className="hero-actions">
            <Link to="/projects" className="button primary">Explore Projects</Link>
            <Link to="/resume" className="button secondary">View Resume</Link>
          </div>
        </section>
        <aside className="hero-visual">
          <div className="floating-card">
            <div className="floating-card-content">
              <h2 className="card-title">About Me</h2>
              <div className="card-badge">AI | Web | Data | Motion</div>
              <p className="card-copy">Driven AI/ML student crafting futuristic web experiences, building modern interfaces, and solving problems with Python, React, and data-driven systems.</p>
              <div className="tech-grid">
                <span className="tech-chip">React</span>
                <span className="tech-chip">Vite</span>
                <span className="tech-chip">Python</span>
                <span className="tech-chip">TensorFlow</span>
                <span className="tech-chip">MongoDB</span>
                <span className="tech-chip">GitHub</span>
              </div>
              <div className="holo-strip">
                <p className="holo-text">“Building the next generation of immersive portfolios with AI-driven design and motion.”</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Home;
