import PropTypes from 'prop-types';
import { useState } from 'react';

const NoteSearch = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const onSearchhandler = (event) => {
    setSearchQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="note-search">
      <input type="text" placeholder="Cari Catatan..." onChange={onSearchhandler} value={searchQuery} />
    </div>
  );
};

export default NoteSearch;

NoteSearch.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
