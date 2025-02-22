import PropTypes from 'prop-types';

const BodyLayout = ({ children, titlePage }) => {
  return (
    <div className="note-app__body">
      <h2>{titlePage}</h2>
      {children}
    </div>
  );
};

BodyLayout.propTypes = {
  titlePage: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default BodyLayout;
