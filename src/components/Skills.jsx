function Skills() {
  const skills = [
  { name: "Hardware & Troubleshooting", level: 80 },
  { name: "IT Support", level: 75 },
  { name: "WordPress", level: 70 },
  { name: "HTML & CSS", level: 50 },
  { name: "React", level: 60 },
  { name: "AI Tools", level: 75 }
];

  return (
    <section className="skills" id="skills">
      <div className="section-title">
        <span>Vaardigheden</span>
        <h2>Technische kennis</h2>
      </div>

      <div className="skills-list">
        {skills.map((skill) => (
          <div className="skill" key={skill.name}>
            <div className="skill-header">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>

            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;