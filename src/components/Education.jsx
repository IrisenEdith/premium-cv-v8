function Education() {
  const education = [
    {
      period: "2023 – heden",
      title: "IT & Webontwikkeling",
      school: "Praktijk & eigen projecten",
      description:
        "• Websites bouwen met WordPress (Syntra, 2023)\n• React, HTML & CSS (zelfstudie en praktijkprojecten)\n• AI-tools: ChatGPT, Claude & Gemini\n• Eigen webprojecten en portfolio"
    },
    {
      period: "2013 – 2025",
      title: "Certificaten & Bijscholing",
      school: "Syntra • VDAB • Azerty Zonhoven",
      description:
        "• Carwrapping (Syntra, 2024–2025)\n• Websites bouwen met WordPress (Syntra, 2023)\n• Verkooptechnieken (Connect Pro Sales, 2019)\n• Verkooptechnieken (Syntra, 2019)\n• Spreken voor een groep (Syntra, 2019)\n• Webdesign (Syntra, 2016)\n• Google AdWords (Syntra, 2016)\n• Bedrijfsbeheer (Syntra, 2016)\n• ICT-opleiding (Azerty Zonhoven, 2013–2014)\n• Computer Binnenstebuiten (VDAB, 2013)\n• Computerbeveiliging (VDAB, 2013)"
    },
    {
      period: "1979 – 1986",
      title: "Technische diploma's",
      school: "Secundair onderwijs",
      description:
        "• HSO – Autotechnieken (A2-diploma, 1982–1986)\n• LSO – Mechanica (A3-diploma, 1979–1982)"
    }
  ];

  return (
    <section className="education" id="opleiding">
      <div className="section-title">
        <span>Opleidingen</span>
        <h2>Opleidingen & Professionele Ontwikkeling</h2>

        <p className="section-description">
          Ik blijf mezelf voortdurend ontwikkelen via opleidingen,
          certificaten, zelfstudie en praktijkervaring. Zo houd ik mijn
          technische kennis actueel en blijf ik groeien binnen IT,
          webontwikkeling en moderne technologie.
        </p>
      </div>

      <div className="education-grid">
        {education.map((item, index) => (
          <div className="education-card" key={index}>
            {item.period && (
              <span className="education-period">{item.period}</span>
            )}

            <h3>{item.title}</h3>

            {item.school && (
              <h4>{item.school}</h4>
            )}

            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;