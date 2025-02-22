import { useEffect, useState } from 'react';
import { RiArchive2Line } from 'react-icons/ri';
import { TiDocumentAdd } from 'react-icons/ti';
import { Link, useSearchParams } from 'react-router';
import BodyLayout from '../components/Layout/BodyLayout';
import { archiveNote, deleteNote, getActiveNotes } from '../utils/network-data';
import SearchBar from '../components/Elements/SearchBar';
import CardList from '../components/Fragments/CardList';

const HomePage = () => {
  const [notes, setNotes] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(() => searchParams.get('search') || '');

  const changeSearchParams = (search) => {
    setSearchParams({ search });
  };

  useEffect(() => {
    getActiveNotes().then(({ data }) => {
      setNotes(data);
    });
  }, []);

  const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(search.toLowerCase()));

  const onSearchHandler = (search) => {
    setSearch(search);
    changeSearchParams(search);
  };

  const onDeleteHandler = async (id) => {
    await deleteNote(id);
    setNotes(notes);
  };

  const onArchiveHandler = async (id) => {
    await archiveNote(id);
    setNotes(notes);
  };

  return (
    <BodyLayout titlePage="Catatan Aktif">
      <SearchBar search={search} searchChange={onSearchHandler} />
      {notes.length > 0 ? <CardList notes={filteredNotes} onDelete={onDeleteHandler} onArchive={onArchiveHandler} /> : <p className="notes-list__empty-message"> Tidak ada Catatan...</p>}

      <div className="homepage__action">
        <Link to="/archive" className="action">
          <RiArchive2Line />
        </Link>
        <Link to="/add" className="action">
          <TiDocumentAdd />
        </Link>
      </div>
    </BodyLayout>
  );
};

export default HomePage;
