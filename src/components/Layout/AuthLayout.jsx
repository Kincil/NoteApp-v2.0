import PropTypes from 'prop-types';
import { Link } from 'react-router';

const AuthLayout = ({ title, type, children }) => {
  return (
    <div className="auth-layout">
      <h2 className="auth-layout__title">{title}</h2>
      {children}
      <p className="auth-layout__description">
        {type === 'login' ? "Don't have an account? " : 'Already have an account? '}
        {type === 'login' ? <Link to="/register">Register</Link> : <Link to="/">Login</Link>}
      </p>
    </div>
  );
};

AuthLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  type: PropTypes.string,
};

export default AuthLayout;
