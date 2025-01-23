import PropTypes from 'prop-types';
import Button from './Button/Button';

export default function ItemAction({ id, onDelete, onArchive, isArchive }) {
  return (
    <div className="note-item__action">
      <Button styling="note-item__delete-button" onClick={() => onDelete(id)}>
        Hapus
      </Button>
      <Button styling="note-item__archive-button" onClick={() => onArchive(id)}>
        {isArchive ? 'Pindahkan' : 'Arsipkan'}
      </Button>
    </div>
  );
}

ItemAction.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  isArchive: PropTypes.bool.isRequired,
};
