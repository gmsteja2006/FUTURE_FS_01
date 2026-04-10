import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="page">
      <div className="home-container">
        <div className="profile-photo">
          <img src="/profile-hero.svg" alt="Profile Illustration" />
        </div>
        <h1>Manikanta Saran Teja Gowthu</h1>
        <p className="tagline">🚀 B.Tech AI/ML Student | Full Stack Developer | Problem Solver</p>
        <p>Passionate about building innovative web applications and solving complex problems. Currently in 2nd year at Aditya University specializing in Artificial Intelligence and Machine Learning.</p>
        <p style={{marginTop: '1.5rem', fontSize: '0.95rem', color: '#999'}}>📧 gowthumanikantasaranteja@gmail.com | 📱 +91 9381512689</p>
      </div>
    </div>
  );
}

export default Home;