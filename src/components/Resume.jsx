import './Resume.css';

function Resume() {
  return (
    <div className="page">
      <div className="page-header">
        <h1>My Resume</h1>
        <p>Education, achievements, and professional background</p>
      </div>
      <div className="page-content">
        <div className="timeline">
          <div className="timeline-item">
            <h3>🎓 B.Tech in AI & Machine Learning</h3>
            <p><strong>Aditya University</strong></p>
            <p>2024 - 2028 (Current: 2nd Year)</p>
            <p>CGPA: 7.30 | Specialization in Artificial Intelligence and Machine Learning</p>
          </div>
          <div className="timeline-item">
            <h3>⭐ HackerRank Achievements</h3>
            <p><strong>Competitive Programming Excellence</strong></p>
            <p>5-star badge in C | 4-star badge in C++ | 3-star badge in SQL, Java & Python | 400+ problems solved on CodeChef & LeetCode</p>
          </div>
          <div className="timeline-item">
            <h3>📜 Professional Certifications</h3>
            <p><strong>Industry Recognized Credentials</strong></p>
            <p>✓ Cisco Networking Academy (C)</p>
            <p>✓ HackerRank (C++, SQL)</p>
            <p>✓ Microsoft (Excel, Power BI)</p>
          </div>
          <div className="timeline-item">
            <h3>💻 Technical Expertise</h3>
            <p><strong>Languages & Tools</strong></p>
            <p>Python, C, C++, Java, HTML, CSS, JavaScript</p>
            <p>MySQL, MongoDB, Git, GitHub, VS Code, Power BI, Jupyter Notebook</p>
          </div>
        </div>
        <div style={{marginTop: '2rem', textAlign: 'center'}}>
          <a href="https://github.com/gmsteja2006" target="_blank" rel="noopener noreferrer" className="download-btn">🔗 View GitHub Profile</a>
        </div>
      </div>
    </div>
  );
}

export default Resume;