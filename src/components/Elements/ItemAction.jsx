import PropTypes from 'prop-types';
import Button from './Button/Button';
import LocaleContext from '../../context/LocaleContext';
import { useContext } from 'react';

export default function ItemAction({ id, onDelete, onArchive, isArchive }) {
  const { locale } = useContext(LocaleContext);

  return (
    <div className="note-item__action">
      <Button styling="note-item__delete-button" onClick={() => onDelete(id)}>
        {locale === 'id' ? 'Hapus' : 'Delete'}
      </Button>
      <Button styling="note-item__archive-button" onClick={() => onArchive(id)}>
        {isArchive ? (locale === 'id' ? 'Arsipkan' : 'Archive') : locale === 'id' ? 'Arsipkan' : 'Archive'}
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
