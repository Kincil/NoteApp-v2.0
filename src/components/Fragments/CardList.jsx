import PropTypes from 'prop-types';
import CardItem from './CardItem';

export default function CardList({ notes, onDelete, onArchive }) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <CardItem key={note.id} id={note.id} onDelete={onDelete} onArchive={onArchive} isArchive={note.archived} {...note} />
      ))}
    </div>
  );
}

CardList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
};
