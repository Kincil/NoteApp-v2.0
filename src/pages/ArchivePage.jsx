import { useEffect, useState } from 'react';
import BodyLayout from '../components/Layout/BodyLayout';
import CardList from '../components/Fragments/CardList';
import { deleteNote, getArchivedNotes, unarchiveNote } from '../utils/network-data';

const ArchivePage = () => {
  const [notes, setNotes] = useState([]);
  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase();
  });

  useEffect(() => {
    getArchivedNotes().then(({ data }) => {
      setNotes(data);
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
      <BodyLayout titlePage="Arsip">{filteredNotes.length > 0 ? <CardList notes={filteredNotes} onDelete={onDeleteHandler} onArchive={onUnarchiveHandler} /> : <p className="notes-list__empty-message">Tidak Ada Arsipan...</p>}</BodyLayout>
    </>
  );
};

export default ArchivePage;
