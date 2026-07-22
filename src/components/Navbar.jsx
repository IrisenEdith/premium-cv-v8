function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <span className="accent">Iris</span> Duym
      </div>

      <nav>
        <a href="#home">Home</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#diensten">Diensten</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Navbar;