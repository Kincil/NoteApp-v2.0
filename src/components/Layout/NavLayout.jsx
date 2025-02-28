import { Link } from 'react-router';
import Button from '../Elements/Button/Button';
import { FiLogOut } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { SiGoogletranslate } from 'react-icons/si';
import LocaleContext from '../../context/LocaleContext';
import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';

const NavLayout = ({ name, logout }) => {
  const { locale, toggleLocale } = useContext(LocaleContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="note-app__header">
      <Link to="/" className="note-app__title">
        <h1>Notify</h1>
      </Link>
      <ul className="note-app__nav">
        <li>
          <Button onClick={toggleTheme} styling="note-app__theme">
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </Button>
        </li>
        <li>
          <Button onClick={toggleLocale} styling="note-app__translate">
            <SiGoogletranslate />
            {locale === 'id' ? ' English' : ' Indonesia'}
          </Button>
        </li>
        <li>
          <Button onClick={logout} styling="note-app__logout">
            <FiLogOut /> {name}
          </Button>
        </li>
      </ul>
    </div>
  );
};

NavLayout.propTypes = {
  name: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
};

export default NavLayout;
