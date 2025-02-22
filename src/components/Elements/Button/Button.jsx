import PropTypes from 'prop-types';

const Button = ({ styling, onClick, children }) => {
  return (
    <button className={styling} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  styling: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default Button;
