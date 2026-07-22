const reasons = [
  {
    icon: "💻",
    title: "Praktische IT-ervaring",
    text: "Praktische ervaring met hardware, IT-support, computerherstellingen en het oplossen van technische problemen."
  },
  {
    icon: "🚀",
    title: "Leergierig",
    text: "Ik investeer voortdurend in nieuwe kennis rond React, AI, webontwikkeling en moderne IT-technologieën."
  },
  {
    icon: "🛠️",
    title: "Probleemoplosser",
    text: "Ik analyseer technische problemen systematisch en werk doelgericht naar een duurzame oplossing."
  },
  {
    icon: "🤝",
    title: "Betrouwbare collega",
    text: "Ik werk nauwkeurig, neem verantwoordelijkheid en draag graag bij aan een positieve en collegiale werksfeer."
  }
];

function WhyHireMe() {
  return (
    <section className="whyhire" id="whyhire">
      <div className="section-title">
        <span>Waarom kiezen voor mij?</span>
        <h2>Waarom ik een meerwaarde ben</h2>
      </div>

      <div className="whyhire-grid">
        {reasons.map((reason) => (
          <div className="whyhire-card" key={reason.title}>
            <div className="whyhire-icon">{reason.icon}</div>
            <h3>{reason.title}</h3>
            <p>{reason.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyHireMe;