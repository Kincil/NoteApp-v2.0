import { useContext, useEffect, useState } from 'react';
import BodyLayout from '../components/Layout/BodyLayout';
import CardList from '../components/Fragments/CardList';
import { deleteNote, getArchivedNotes, unarchiveNote } from '../utils/network-data';
import LocaleContext from '../context/LocaleContext';
import LoadingItem from '../components/Elements/LoadingItem';

const ArchivePage = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase();
  });
  const { locale } = useContext(LocaleContext);

  useEffect(() => {
    getArchivedNotes().then(({ data }) => {
      setNotes(data);
      setLoading(false);
    });
  }, []);

  const onUnarchiveHandler = async (id) => {
    const { error } = await unarchiveNote(id);

    if (!error) {
      const { data } = await getArchivedNotes();
      setNotes(data);
    }
  };

  const onDeleteHandler = async (id) => {
    const { error } = await deleteNote(id);

    if (!error) {
      const { data } = await getArchivedNotes();
      setNotes(data);
    }
  };

  return (
    <>
      {loading ? (
        <LoadingItem />
      ) : (
        <BodyLayout titlePage={locale === 'id' ? 'Arsipan' : 'Archives'}>
          <CardList notes={filteredNotes} onDelete={onDeleteHandler} onArchive={onUnarchiveHandler} locale={locale} />
        </BodyLayout>
      )}
    </>
  );
};

export default ArchivePage;
