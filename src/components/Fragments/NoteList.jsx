import PropTypes from 'prop-types';
import CardItem from './CardItem';

export default function NoteList({ notes, onDelete, onArchive }) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <CardItem key={note.id} id={note.id} onDelete={onDelete} onArchive={onArchive} isArchive={note.archived} {...note} />
      ))}
    </div>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
};
