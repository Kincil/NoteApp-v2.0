import PropTypes from 'prop-types';
import Input from './Input/Input';
import LocaleContext from '../../context/LocaleContext';
import { useContext } from 'react';

const SearchBar = ({ search, searchChange }) => {
  const { locale } = useContext(LocaleContext);

  return (
    <div className="note-search">
      <Input type="text" placeholder={locale === 'id' ? 'Cari catatan...' : 'Search note...'} onChange={(event) => searchChange(event.target.value)} value={search} styling="note-search__input" />
    </div>
  );
};

SearchBar.propTypes = {
  search: PropTypes.string.isRequired,
  searchChange: PropTypes.func.isRequired,
};

export default SearchBar;
