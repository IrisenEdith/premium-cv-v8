import { profile } from "../data/profile";
import heroImage from "../assets/images/projects/iris-hero.webp";
import heroImageMobile from "../assets/images/projects/iris-hero-680.webp";
function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <span className="subtitle">
  {profile.subtitle}
</span>

        <h1>
  {profile.name}
  <br />
  <span>PASSIE VOOR IT • PROBLEEMOPLOSSER • LEERGIERIG •</span>
</h1>

        <p className="description">
  {profile.intro}
</p>

        <div className="hero-buttons">
    <div className="stats">
        <div>
            <h2>3</h2>
            <span>Live websites</span>
        </div>

        <div>
            <h2>10+</h2>
            <span>AI Tools</span>
        </div>

        <div>
            <h2>100%</h2>
            <span>Motivatie</span>
        </div>
    </div>

    <a href="#portfolio" className="btn-primary">
        Bekijk mijn projecten
    </a>

    <a href="#contact" className="btn-secondary">
        Contact opnemen
    </a>
</div>

</div> {/* <-- hero-content wordt hier afgesloten */}

<div className="hero-image">
    <img
        className="hero-person"
        src={heroImage}
        srcSet={`${heroImageMobile} 680w, ${heroImage} 1120w`}
        sizes="(max-width: 900px) 340px, 560px"
        alt={profile.name}
        width="1120"
        height="1680"
        fetchpriority="high"
        decoding="async"
    />
</div>

</section>
  );
}

export default Hero;