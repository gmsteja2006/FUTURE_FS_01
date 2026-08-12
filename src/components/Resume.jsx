import './Resume.css';

function Resume() {
  return (
    <div className="resume-page page">
      <div className="page-header">
        <h1>Resume</h1>
      </div>

      <div className="resume-grid">
        <section className="resume-card">
          <div className="section-title">Professional Summary</div>
          <p>
            Second-year B.Tech student focused on Artificial Intelligence and Machine Learning. Skilled in Python, algorithm design, competitive programming, and data-driven project development.
          </p>
        </section>

        <section className="resume-card">
          <div className="section-title">Education</div>
          <div className="item">
            <h3>B.Tech in AI & Machine Learning</h3>
            <span>Aditya University · 2024 - 2028</span>
            <p>Current 2nd year | CGPA 7.30 | Relevant coursework: Data Structures, AI, Machine Learning, Python, Big Data.</p>
          </div>
        </section>

        <section className="resume-card">
          <div className="section-title">Skills</div>
          <div className="skills-list">
            <span>Python</span>
            <span>C</span>
            <span>C++</span>
            <span>Java</span>
            <span>JavaScript</span>
            <span>SQL</span>
            <span>MongoDB</span>
            <span>Git</span>
          </div>
        </section>

        <section className="resume-card">
          <div className="section-title">Highlights</div>
          <ul>
            <li>5-star C and 4-star C++ on HackerRank, with 400+ problems solved across CodeChef and LeetCode.</li>
            <li>Completed certificates from Cisco Networking Academy, HackerRank, and Microsoft Power BI.</li>
            <li>Experienced in building interactive portfolio projects, data dashboards, and ML prototypes.</li>
          </ul>
        </section>

        <section className="resume-card resume-full">
          <div className="section-title">Experience & Projects</div>
          <div className="item">
            <h3>Portfolio & Project Work</h3>
            <p>
              Built a futuristic React portfolio with animated UI, worked on data-driven analytics projects, and explored ML model development with Jupyter Notebook and Power BI visualizations.
            </p>
          </div>
        </section>
      </div>

      <div className="cta-row">
        <a href="https://github.com/gmsteja2006" target="_blank" rel="noopener noreferrer" className="download-btn">
          View GitHub Profile
        </a>
      </div>
    </div>
  );
}

export default Resume;
