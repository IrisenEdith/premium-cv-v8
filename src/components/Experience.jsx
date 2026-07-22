function Experience() {
  const experiences = [
    {
      period: "Maart 2023 – Oktober 2023",
      title: "PC-Technieker",
      company: "Auva – Heusden-Zolder",
      tasks: [
        "Diagnose en herstel van hardwareproblemen",
        "Installatie en configuratie van IT-systemen",
        "Ondersteuning van klanten bij technische vragen"
      ]
    },
    {
      period: "Maart 2022 – September 2022",
      title: "Vrijwilliger IT & Websitebeheer",
      company: "Radio 777 – Hasselt",
      tasks: [
        "IT-ondersteuning",
        "Ontwikkeling en onderhoud van de website",
        "Technische ondersteuning"
      ]
    },
    {
      period: "Juni 2021 – Februari 2022",
      title: "Vrijwilliger IT",
      company: "Regenbooghuis – Hasselt",
      tasks: [
        "IT-ondersteuning",
        "Beheer van website en YouTube-kanaal",
        "Probleemoplossing en technisch onderhoud"
      ]
    },
    {
      period: "Januari 2018 – Juni 2020",
      title: "Eigen IT-shop",
      company: "Diepenbeek",
      tasks: [
        "Verkoop en advies van IT-producten",
        "Herstelling van computers",
        "Herstelling van mobiele toestellen"
      ]
    },
    {
      period: "Mei 2016 – December 2017",
      title: "Stage IT-Technicus",
      company: "Multimediashop – Bilzen",
      tasks: [
        "Herstelling van IT-hardware",
        "Reparatie van mobiele toestellen",
        "Klanten adviseren over technische oplossingen"
      ]
    },
    {
      period: "Februari 2016 – April 2016",
      title: "Stage ICT",
      company: "Provinciehuis Hasselt",
      tasks: [
        "Ondersteuning bij IT-projecten",
        "Software- en hardwarebeheer"
      ]
    },
    {
      period: "Februari 2015 – Januari 2016",
      title: "Vrijwilliger IT",
      company: "Provinciaal Natuurcentrum Genk",
      tasks: [
        "Smartboards configureren",
        "Trainingen geven",
        "Technische ondersteuning",
        "Onderhoudswerkzaamheden"
      ]
    },
    {
      period: "Mei 1990 – Januari 2018",
      title: "Operator-Inspector",
      company: "Aperam Genk",
      tasks: [
        "Kwaliteitscontrole van productieprocessen",
        "Onderhoud en optimalisatie van machines",
        "Problemen analyseren en oplossen",
        "Werken volgens hoge kwaliteits- en veiligheidsnormen"
      ]
    },
    {
      period: "December 1992 – September 1994",
      title: "Touringcarchauffeur",
      company: "De Zigeuner – Diepenbeek",
      tasks: [
        "Personenvervoer voor schooldiensten en toerisme"
      ]
    },
    {
      period: "Juni 1987 – April 1990",
      title: "Mecanicien",
      company: "De Zigeuner – Diepenbeek",
      tasks: [
        "Onderhoud en herstelling van voertuigen",
        "Bestelling en opvolging van onderdelen",
        "Onderhoud van bedrijfsgebouwen"
      ]
    },
    {
      period: "Juli 1986 – Januari 1987",
      title: "Magazijnier / Heftruckbestuurder",
      company: "Philips – Hasselt",
      tasks: [
        "Laden en lossen van vrachtwagens",
        "Magazijnbeheer",
        "Bevoorrading van productielijnen"
      ]
    }
  ];

  return (
    <section className="experience" id="experience">
      <div className="section-title">
        <span>Werkervaring</span>
        <h2>Professionele ervaring</h2>

        <p className="section-description">
          Doorheen mijn loopbaan heb ik een brede technische ervaring opgebouwd,
          gaande van hardwareherstellingen en IT-support tot kwaliteitscontrole,
          mechanica en klantgericht werken.
        </p>
      </div>

      <div className="experience-grid">
        {experiences.map((job, index) => (
          <div className="experience-card" key={index}>

            <span className="experience-period">
              {job.period}
            </span>

            <h3>{job.title}</h3>

            <h4>{job.company}</h4>

            <ul>
              {job.tasks.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;