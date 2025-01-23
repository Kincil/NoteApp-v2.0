import PropTypes from 'prop-types';
import { Link } from 'react-router';

const PageLayout = ({ children, titlePage }) => {
  return (
    <>
      <div className="note-app__header">
        <Link to="/" className="note-app__title">
          <h1>Notes</h1>
        </Link>
      </div>
      <div className="note-app__body">
        <h2>{titlePage}</h2>
        {children}
      </div>
    </>
  );
};

PageLayout.propTypes = {
  titlePage: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default PageLayout;
