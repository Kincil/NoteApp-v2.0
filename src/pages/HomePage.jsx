import { useContext, useEffect, useState } from 'react';
import { RiArchive2Line } from 'react-icons/ri';
import { TiDocumentAdd } from 'react-icons/ti';
import { Link, useSearchParams } from 'react-router';
import BodyLayout from '../components/Layout/BodyLayout';
import { archiveNote, deleteNote, getActiveNotes } from '../utils/network-data';
import SearchBar from '../components/Elements/SearchBar';
import CardList from '../components/Fragments/CardList';
import LocaleContext from '../context/LocaleContext';
import LoadingItem from '../components/Elements/LoadingItem';

const HomePage = () => {
  const [notes, setNotes] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(() => searchParams.get('search') || '');
  const [loading, setLoading] = useState(true);
  const { locale } = useContext(LocaleContext);

  const changeSearchParams = (search) => {
    setSearchParams({ search });
  };

  useEffect(() => {
    getActiveNotes().then(({ data }) => {
      setNotes(data);
      setLoading(false);
    });
  }, []);

  const onSearchHandler = (search) => {
    setSearch(search);
    changeSearchParams(search);
  };

  const onDeleteHandler = async (id) => {
    const { error } = await deleteNote(id);

    if (!error) {
      const { data } = await getActiveNotes();
      setNotes(data);
    }
  };

  const onArchiveHandler = async (id) => {
    const { error } = await archiveNote(id);

    if (!error) {
      const { data } = await getActiveNotes();
      setNotes(data);
    }
  };

  const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      {loading ? (
        <LoadingItem />
      ) : (
        <BodyLayout titlePage={locale === 'id' ? 'Catatan Aktif' : 'Active Notes'}>
          <SearchBar search={search} searchChange={onSearchHandler} />
          <CardList notes={filteredNotes} onDelete={onDeleteHandler} onArchive={onArchiveHandler} locale={locale} />

          <div className="homepage__action">
            <Link to="/archive" className="action">
              <RiArchive2Line />
            </Link>
            <Link to="/add" className="action">
              <TiDocumentAdd />
            </Link>
          </div>
        </BodyLayout>
      )}
    </>
  );
};

export default HomePage;
