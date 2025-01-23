import React, { useState } from 'react';
import NoteList from '../components/Fragments/NoteList';
import NoteSearch from '../components/Fragments/NoteSearch';
import { archiveNote, deleteNote, getActiveNotes, getAllNotes, getArchivedNotes, unarchiveNote } from '../utils/local-data';
import { RiArchive2Line } from 'react-icons/ri';
import { TiDocumentAdd } from 'react-icons/ti';
import { Link } from 'react-router';
import PageLayout from '../components/Layout/PageLayout';

const HomePage = () => {
  const [notes, setNotes] = useState(getAllNotes());
  const [search, setSearch] = useState('');

  const onDeleteHandler = (id) => {
    deleteNote(id);
    setNotes(notes);
  };

  const onArchiveHandler = (id) => {
    archiveNote(id);
    setNotes(notes);
  };

  const onUnarchiveHandler = (id) => {
    unarchiveNote(id);
    setNotes(notes);
  };

  const onSearchHandler = (searchQuery) => {
    setSearch(searchQuery);
  };

  const archive = getArchivedNotes();
  const unArchive = getActiveNotes();
  const filteredNotes = unArchive.filter((note) => note.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <PageLayout titlePage="Catatan Aktif">
      <NoteSearch onSearch={onSearchHandler} />
      {unArchive.length > 0 ? <NoteList notes={filteredNotes} onDelete={onDeleteHandler} onArchive={onArchiveHandler} /> : <p className="notes-list__empty-message"> Tidak ada Catatan...</p>}
      <h2>Arsip</h2>
      {archive.length > 0 ? <NoteList notes={archive} onDelete={onDeleteHandler} onArchive={onUnarchiveHandler} /> : <p className="notes-list__empty-message">Tidak Ada Arsipan...</p>}

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

// export default class HomePage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       notes: getAllNotes(),
//       search: '',
//     };
//     // bind
//     this.onDeleteHandler = this.onDeleteHandler.bind(this);
//     this.onArchiveHandler = this.onArchiveHandler.bind(this);
//     this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
//     this.onSearchHandler = this.onSearchHandler.bind(this);
//   }
//   // Method Event handler
//   onDeleteHandler(id) {
//     const notes = this.state.notes.filter((note) => note.id !== id);
//     this.setState({ notes });
//   }

//   onArchiveHandler(id) {
//     const notes = this.state.notes.map((note) => (note.id === id ? { ...note, archived: !note.archived } : note));
//     this.setState({ notes });
//   }

//   onSearchHandler(searchQuery) {
//     this.setState(() => {
//       return {
//         search: searchQuery,
//       };
//     });
//   }

//   onAddNotesHandler({ title, body }) {
//     this.setState((prevState) => {
//       return {
//         notes: [
//           ...prevState.notes,
//           {
//             id: +new Date(),
//             title,
//             body,
//             createdAt: new Date().toISOString(),
//             archived: false,
//           },
//         ],
//       };
//     });
//   }

//   render() {
//     const unArchive = this.state.notes.filter((note) => note.archived === false);
//     const archive = this.state.notes.filter((note) => note.archived === true);

//     const filteredNotes = unArchive.filter((note) => note.title.toLowerCase().includes(this.state.search.toLowerCase()));

//     return (
//       <>
//         <PageLayout titlePage="Catatan Aktif">
//           <NoteSearch onSearch={this.onSearchHandler} />
//           {this.state.notes.filter((note) => !note.archived).length > 0 ? (
//             <NoteList notes={filteredNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
//           ) : (
//             <p className="notes-list__empty-message"> Tidak ada Catatan...</p>
//           )}
//           <h2>Arsip</h2>
//           {this.state.notes.filter((note) => note.archived).length > 0 ? <NoteList notes={archive} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} /> : <p className="notes-list__empty-message">Tidak Ada Arsipan...</p>}

//           <div className="homepage__action">
//             <Link to="/archive" className="action">
//               <RiArchive2Line />
//             </Link>
//             <Link to="/add" className="action">
//               <TiDocumentAdd />
//             </Link>
//           </div>
//         </PageLayout>
//       </>
//     );
//   }
// }
