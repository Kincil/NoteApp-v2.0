import { useState } from 'react';
import NoteList from '../components/Fragments/NoteList';
import NoteSearch from '../components/Fragments/NoteSearch';
import { archiveNote, deleteNote, getActiveNotes, getAllNotes } from '../utils/local-data';
import { RiArchive2Line } from 'react-icons/ri';
import { TiDocumentAdd } from 'react-icons/ti';
import { Link, useSearchParams } from 'react-router';
import PageLayout from '../components/Layout/PageLayout';

const HomePage = () => {
  const [notes, setNotes] = useState(getAllNotes());
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('search');
  const [search, setSearch] = useState(searchQuery || '');

  const changeSearchParams = (search) => {
    setSearchParams({ search });
  };

  const onDeleteHandler = (id) => {
    deleteNote(id);
    setNotes(getAllNotes());
  };

  const onArchiveHandler = (id) => {
    archiveNote(id);
    setNotes(getAllNotes());
  };

  const onSearchHandler = (search) => {
    setSearch(search);
    changeSearchParams(search);
  };

  const unArchive = getActiveNotes();
  const filteredNotes = unArchive.filter((note) => note.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <PageLayout titlePage="Catatan Aktif">
      <NoteSearch search={search} searchChange={onSearchHandler} />
      {unArchive.length > 0 ? <NoteList notes={filteredNotes} onDelete={onDeleteHandler} onArchive={onArchiveHandler} /> : <p className="notes-list__empty-message"> Tidak ada Catatan...</p>}

      <div className="homepage__action">
        <Link to="/archive" className="action">
          <RiArchive2Line />
        </Link>
        <Link to="/add" className="action">
          <TiDocumentAdd />
        </Link>
      </div>
    </PageLayout>
  );
};

export default HomePage;
