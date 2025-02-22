import { useState } from 'react';
import BodyLayout from '../components/Layout/BodyLayout';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import Input from '../components/Elements/Input/Input';
import { addNote } from '../utils/network-data';

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

  const onSubmitChange = async (event) => {
    event.preventDefault();
    await addNote({ title, body });
    toast.success('Catatan berhasil ditambahkan');
    navigate('/');
  };

  return (
    <BodyLayout titlePage="Tambah Catatan">
      <div className="note-input">
        <form onSubmit={onSubmitChange}>
          <p className="note-input__title__char-limit">Sisa Karakter: {limit}</p>
          <Input type="text" placeholder="Ini adalah judul ..." onChange={onTitleChange} value={title} styling="note-input__title" />
          <textarea className="note-input__body" placeholder="Tuliskan catatanmu di sini ..." onChange={onBodyChange} value={body} required></textarea>
          <button type="submit" className="note-input__button">
            Buat Catatan
          </button>
        </form>
      </div>
    </BodyLayout>
  );
};

export default AddPage;
