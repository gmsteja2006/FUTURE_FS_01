import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Profile Summary</h4>
            <p>AI/ML student at Aditya University (2024-2028) with full-stack development experience, competitive programming achievements, and a strong foundation in Python, Java, and JavaScript.</p>
            <p>Completed 400+ coding problems across CodeChef and LeetCode, and built real-world projects in React, Java, SQL, and web technologies.</p>
          </div>
          <div className="footer-section">
            <h4>Connect With Me</h4>
            <ul>
              <li><a href="https://github.com/gmsteja2006" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/teja-gowthu-4b8a65337/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://www.hackerrank.com/profile/gowthumanikanta1" target="_blank" rel="noopener noreferrer">HackerRank</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p><a href="mailto:gowthumanikantasaranteja@gmail.com">gowthumanikantasaranteja@gmail.com</a></p>
            <p><a href="tel:+919381512689">+91 9381512689</a></p>
          </div>
        </div>
        <div className="footer-divider"></div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Manikanta Saran Teja Gowthu. All rights reserved.</p>
          <p>B.Tech AI/ML Student at Aditya University (2024-2028) | Built with <span className="heart">❤</span> using React & Vite</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;