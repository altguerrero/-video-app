import '../assets/styles/components/Hero.scss';
import HeroImage from '../assets/static/images/hero.jpg';
import Search from './Search';

const Hero = () => (
  <div className="hero">
    <img src={HeroImage} alt="hero banner" />
    <Search />
  </div>
);

export default Hero;
