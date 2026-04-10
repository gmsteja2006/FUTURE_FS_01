import './Skills.css';

function Skills() {
  const skills = [
    { category: 'Languages', items: ['Python', 'C', 'C++', 'Java', 'JavaScript', 'HTML', 'CSS'] },
    { category: 'Frameworks & Libraries', items: ['React', 'Node.js', 'Express', 'Vite'] },
    { category: 'Databases', items: ['MySQL', 'MongoDB'] },
    { category: 'Tools & Platforms', items: ['Git', 'GitHub', 'VS Code', 'Power BI', 'Jupyter Notebook'] },
    { category: 'AI / ML & Data', items: ['Machine Learning', 'Data Analysis', 'TensorFlow', 'Pandas', 'NumPy'] }
  ];

  return (
    <div className="page skills-page">
      <div className="page-header">
        <h1>Skills</h1>
        <p>Explore the technical skills and tools I use to build projects, solve problems, and learn continuously.</p>
      </div>
      <div className="page-content skills-content">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <h3>{skill.category}</h3>
            <ul>
              {skill.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
