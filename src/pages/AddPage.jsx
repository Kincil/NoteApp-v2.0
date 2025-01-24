import { useState } from 'react';
import PageLayout from '../components/Layout/PageLayout';
import { useNavigate } from 'react-router';
import { addNote } from '../utils/local-data';
import { toast } from 'react-toastify';

const AddPage = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const charLimit = 50;
  const navigate = useNavigate();

  const limit = charLimit - title.length;

  const onTitleChange = (event) => {
    const newLimit = event.target.value;
    if (newLimit.length <= charLimit) {
      setTitle(newLimit);
    }
  };

  const onBodyChange = (event) => {
    setBody(event.target.value);
  };

  const onSubmitChange = (event) => {
    event.preventDefault();
    addNote({ title, body });
    toast.success('Catatan berhasil ditambahkan');
    navigate('/');
  };

  return (
    <PageLayout titlePage="Tambah Catatan">
      <div className="note-input">
        <form onSubmit={onSubmitChange}>
          <p className="note-input__title__char-limit">Sisa Karakter: {limit}</p>
          <input type="text" className="note-input__title" placeholder="Ini adalah judul ..." onChange={onTitleChange} value={title} required />
          <textarea className="note-input__body" placeholder="Tuliskan catatanmu di sini ..." onChange={onBodyChange} value={body} required></textarea>
          <button type="submit">Buat Catatan</button>
        </form>
      </div>
    </PageLayout>
  );
};

export default AddPage;
