import './Projects.css';
import todoAppImage from '../assets/todo-app.svg';
import shoppingCartImage from '../assets/shopping-cart.svg';
import docutrustImage from '../assets/docutrust.svg';

function Projects() {
  const projects = [
    {
      title: 'To-Do List of Applications',
      desc: 'A comprehensive to-do list application designed to help users manage their daily tasks efficiently. Features include adding, editing, deleting, and marking tasks as complete with a clean, intuitive interface.',
      tech: 'React, JavaScript, CSS, Vercel',
      github: 'https://github.com/gmsteja2006/TO-DO-LIST-OF-APPLICATIONS',
      demo: 'https://to-do-list-of-applications.vercel.app',
      image: todoAppImage
    },
    {
      title: 'Online Shopping Cart',
      desc: 'A console-based Java application to manage shopping activities including product browsing, adding items to cart, updating quantities, and checkout features. Implemented database connectivity using JDBC with SQL queries.',
      tech: 'Java, JDBC, SQL, Database Management',
      github: 'https://github.com/gmsteja2006/Online-shopping-cart',
      demo: 'https://online-shopping-cart-ruddy.vercel.app/',
      image: shoppingCartImage
    },
    {
      title: 'DocuTrust',
      desc: 'A secure document verification and management platform that simplifies authentication, storage, and sharing of trusted digital documents.',
      tech: 'React, JavaScript, CSS, Vercel',
      github: 'https://github.com/gmsteja2006/DocuTrust',
      demo: 'https://docu-trust.vercel.app/',
      image: docutrustImage
    }
  ];

  return (
    <div className="page">
      <div className="page-header">
        <h1>My Projects</h1>
        <p>Showcase of my development work and technical skills</p>
      </div>
      <div className="page-content">
        <div className="projects-grid">
          {projects.map((p, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={p.image} alt={p.title} />
              </div>
              <div className="project-info">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <p className="tech-line"><strong>Tech Stack:</strong> {p.tech}</p>
                <div className="links">
                  <a href={p.github} target="_blank" rel="noopener noreferrer">View Code →</a>
                  {p.demo && <a href={p.demo} target="_blank" rel="noopener noreferrer">Live Demo →</a>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
