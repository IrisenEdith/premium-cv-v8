function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer-content">

        <h3>Iris Duym</h3>

                <p className="footer-text">
          Gebouwd met React, Vite en veel enthousiasme voor technologie.
        </p>

        <div className="footer-divider"></div>

        <p className="footer-copy">
          © {year} Iris Duym — Alle rechten voorbehouden.
        </p>

      </div>

    </footer>
  );
}

export default Footer;