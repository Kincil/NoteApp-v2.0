import PropTypes from 'prop-types';
import { Link } from 'react-router';

export default function ItemBody({ id, title, createdAt, body }) {
  return (
    <div className="note-item__content">
      <Link to={`/detail/${id} `} className="note-item__title">
        <h3>{title}</h3>
      </Link>
      <p className="note-item__date">{createdAt}</p>
      <p className="note-item__body">{body}</p>
    </div>
  );
}

ItemBody.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
