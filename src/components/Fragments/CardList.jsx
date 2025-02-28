import PropTypes from 'prop-types';
import CardItem from './CardItem';

export default function CardList({ notes, onDelete, onArchive, locale }) {
  return (
    <div className="cards-list">
      {notes.length > 0 ? (
        notes.map((note) => <CardItem key={note.id} id={note.id} onDelete={onDelete} onArchive={onArchive} isArchive={note.archived} {...note} />)
      ) : (
        <p className="cards-list__empty-message">{locale === 'id' ? 'Tidak ada catatan aktif...' : 'No active notes...'}</p>
      )}
    </div>
  );
}

CardList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  locale: PropTypes.string.isRequired,
};
