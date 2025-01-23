import { useState } from 'react';
import NoteList from '../components/Fragments/NoteList';
import PageLayout from '../components/Layout/PageLayout';
import { deleteNote, getAllNotes, getArchivedNotes, unarchiveNote } from '../utils/local-data';

const ArchivePage = () => {
  const [notes, setNotes] = useState(getAllNotes());
  const archive = getArchivedNotes();

  const onUnarchiveHandler = (id) => {
    unarchiveNote(id);
    setNotes(getAllNotes());
  };

  const onDeleteHandler = (id) => {
    deleteNote(id);
    setNotes(getAllNotes());
  };

  return (
    <>
      <PageLayout titlePage="Arsip">{archive.length > 0 ? <NoteList notes={archive} onDelete={onDeleteHandler} onArchive={onUnarchiveHandler} /> : <p className="notes-list__empty-message">Tidak Ada Arsipan...</p>}</PageLayout>
    </>
  );
};

export default ArchivePage;
