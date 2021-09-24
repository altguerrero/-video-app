import '../assets/styles/components/Header.scss';
// Icons
import DownArrow from '../assets/static/icons/DownArrow';

const Header = () => {
  const _addMenuActive = () => {
    const menu = document.querySelector('.header__menu');
    menu.classList.add('active');
  };

  const _removeMenuActive = () => {
    const menu = document.querySelector('.header__menu');
    setTimeout(() => {
      menu.classList.remove('active');
    }, 400);
  };

  return (
    <header className="header container">
      <a className="header__logo" href="/">
        App video
      </a>
      <div
        className="header__menu"
        onMouseEnter={(e) => _addMenuActive(e)}
        onMouseLeave={(e) => _removeMenuActive(e)}
      >
        <div className="header__menu--profile">
          <div className="avatar">
            <a href="/" className="avatar__icon">
              J
            </a>
            <DownArrow />
          </div>
          <DownArrow />
        </div>
        <div className="header__menu--options">
          <ul>
            <li>
              <a href="/">Count</a>
            </li>
            <li>
              <a href="/">Sign off</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
