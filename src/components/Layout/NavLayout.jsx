import { Link } from 'react-router';
import Button from '../Elements/Button/Button';
import { FiLogOut } from 'react-icons/fi';
import PropTypes from 'prop-types';

const NavLayout = ({ name, logout }) => {
  return (
    <div className="note-app__header">
      <Link to="/" className="note-app__title">
        <h1>Notify</h1>
      </Link>
      <Button onClick={logout} styling="note-app__logout">
        <FiLogOut /> {name}
      </Button>
    </div>
  );
};

NavLayout.propTypes = {
  name: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
};

export default NavLayout;
