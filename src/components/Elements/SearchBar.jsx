import PropTypes from 'prop-types';
import Input from './Input/Input';

const SearchBar = ({ search, searchChange }) => {
  return (
    <div className="note-search">
      <Input type="text" placeholder="Cari Catatan..." onChange={(event) => searchChange(event.target.value)} value={search} styling="note-search__input" />
    </div>
  );
};

SearchBar.propTypes = {
  search: PropTypes.string.isRequired,
  searchChange: PropTypes.func.isRequired,
};

export default SearchBar;
