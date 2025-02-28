import PropTypes from 'prop-types';
import { Link } from 'react-router';
import Button from '../Elements/Button/Button';
import { FaMoon, FaSun } from 'react-icons/fa';
import ThemeContext from '../../context/ThemeContext';
import { useContext } from 'react';

const AuthLayout = ({ title, type, children }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="auth-layout">
      <h2 className="auth-layout__title">{title}</h2>
      <p className="auth_layout__subtitle">Welcome, Please enter your details</p>
      {children}
      <p className="auth-layout__description">
        {type === 'login' ? "Don't have an account? " : 'Already have an account? '}
        {type === 'login' ? <Link to="/register">Register</Link> : <Link to="/">Login</Link>}
      </p>
      <Button onClick={toggleTheme} styling="note-app__theme">
        {theme === 'light' ? <FaMoon /> : <FaSun />}
      </Button>
    </div>
  );
};

AuthLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  type: PropTypes.string,
};

export default AuthLayout;
