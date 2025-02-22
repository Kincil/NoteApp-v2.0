import PropTypes from 'prop-types';

const Input = ({ type, placeholder, onChange, value, styling, id }) => {
  return <input type={type} placeholder={placeholder} onChange={onChange} value={value} className={styling} id={id} required />;
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  styling: PropTypes.string,
  id: PropTypes.string,
};

export default Input;
