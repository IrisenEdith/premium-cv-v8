function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="contact-card">

        <span className="section-label">
          Contact
        </span>

        <h2>
          Laten we kennismaken
        </h2>

        <p>
  Ben je op zoek naar een gemotiveerde IT-medewerker met een passie voor hardware, troubleshooting en technische ondersteuning? Ik licht mijn ervaring en motivatie graag toe tijdens een kennismakingsgesprek.
</p>

        <div className="contact-info">

          <div className="contact-item">
            <span>📧</span>
            <a href="mailto:duym.iris@gmail.com">
              duym.iris@gmail.com
            </a>
          </div>

          <div className="contact-item">
            <span>📱</span>
            <a href="tel:+32476284847">
              +32 476 28 48 47
            </a>
          </div>

          <div className="contact-item">
            <span>📍</span>
            <p>Diepenbeek, België</p>
          </div>

        </div>

        <div className="contact-buttons">

          <a
            className="primary-button"
            href="mailto:duym.iris@gmail.com"
          >
            Stuur mij een e-mail
          </a>

          <a
            className="secondary-button"
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>

          <a
            className="secondary-button"
            href="/motivatiebrief.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download mijn motivatiebrief
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;