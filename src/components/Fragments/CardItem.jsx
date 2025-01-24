import ItemBody from '../Elements/ItemBody';
import ItemAction from '../Elements/ItemAction';
import { showFormattedDate } from '../../utils';
import PropTypes from 'prop-types';

export default function CardItem({ title, createdAt, body, id, onDelete, onArchive, isArchive }) {
  return (
    <div className="note-item">
      <ItemBody id={id} title={title} createdAt={showFormattedDate(createdAt)} body={body} />
      <ItemAction id={id} onDelete={onDelete} onArchive={onArchive} isArchive={isArchive} />
    </div>
  );
}

CardItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  isArchive: PropTypes.bool.isRequired,
};
