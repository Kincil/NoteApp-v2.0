import PropTypes from 'prop-types';

const NoteSearch = ({ search, searchChange }) => {
  return (
    <div className="note-search">
      <input type="text" placeholder="Cari Catatan..." onChange={(event) => searchChange(event.target.value)} value={search} />
    </div>
  );
};

export default NoteSearch;

NoteSearch.propTypes = {
  search: PropTypes.string.isRequired,
  searchChange: PropTypes.func.isRequired,
};
