interface HeroProps {
  logoUrl?: string;
  pretitle?: string;
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
}

export default function Hero({
  pretitle, title, subtitle, description, logoUrl, className
  }: HeroProps): JSX.Element {

  return (
    <div className={`hero ${className || ''}`}>
      <div className="hero-container">
        <img className="hero-container__logo" src={logoUrl} alt="logo"/>
        <hr className="hero-container__divider" />
        <h6 className="hero-container__pretitle">{pretitle}</h6>
        <h2 className="hero-container__title">{title}</h2>
        <h4 className="hero-container__subtitle">{subtitle}</h4>
        <p className="hero-container__description">{description}</p>
      </div>
    </div>
  );
};
 