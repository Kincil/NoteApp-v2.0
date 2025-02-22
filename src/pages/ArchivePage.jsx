import { useEffect, useState } from 'react';
import BodyLayout from '../components/Layout/BodyLayout';
import { deleteNote, getAllNotes } from '../utils/local-data';
import CardList from '../components/Fragments/CardList';
import { getActiveNotes, getArchivedNotes, unarchiveNote } from '../utils/network-data';

const ArchivePage = () => {
  const [notes, setNotes] = useState([]);
  const archive = getArchivedNotes();

  useEffect(() => {
    getActiveNotes().then(({ data }) => {
      setNotes(data);
    });
  }, []);

  const onUnarchiveHandler = async (id) => {
    await unarchiveNote(id);
    setNotes(getAllNotes());
  };

  const onDeleteHandler = (id) => {
    deleteNote(id);
    setNotes(getAllNotes());
  };

  return (
    <>
      <BodyLayout titlePage="Arsip">{archive.length > 0 ? <CardList notes={archive} onDelete={onDeleteHandler} onArchive={onUnarchiveHandler} /> : <p className="notes-list__empty-message">Tidak Ada Arsipan...</p>}</BodyLayout>
    </>
  );
};

export default ArchivePage;
