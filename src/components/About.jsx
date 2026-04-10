import './About.css';

function About() {
  return (
    <div className="page">
      <div className="page-header">
        <h1>About Me</h1>
        <p>Get to know my background, skills, and passion for technology</p>
      </div>
      <div className="page-content">
        <div className="about-content">
          <p>I'm a passionate B.Tech second-year student specializing in Artificial Intelligence and Machine Learning at Aditya University. I have a strong foundation in full-stack web development and problem-solving. With a CGPA of 7.30, I've demonstrated excellence in academics and competitive programming, solving 400+ problems across CodeChef and LeetCode. I'm seeking internship opportunities to apply my knowledge in real-world projects.</p>
          <h3>Technical Skills</h3>
          <div className="skills">
            <div className="skill">
              <span>Python</span>
              <div className="progress-bar"><div className="progress" style={{width: '88%'}}></div></div>
            </div>
            <div className="skill">
              <span>C</span>
              <div className="progress-bar"><div className="progress" style={{width: '90%'}}></div></div>
            </div>
            <div className="skill">
              <span>Java</span>
              <div className="progress-bar"><div className="progress" style={{width: '85%'}}></div></div>
            </div>
            <div className="skill">
              <span>JavaScript</span>
              <div className="progress-bar"><div className="progress" style={{width: '82%'}}></div></div>
            </div>
            <div className="skill">
              <span>MySQL & MongoDB</span>
              <div className="progress-bar"><div className="progress" style={{width: '85%'}}></div></div>
            </div>
            <div className="skill">
              <span>Web Development</span>
              <div className="progress-bar"><div className="progress" style={{width: '87%'}}></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;