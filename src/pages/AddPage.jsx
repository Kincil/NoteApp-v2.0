import { useContext, useState } from 'react';
import BodyLayout from '../components/Layout/BodyLayout';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import Input from '../components/Elements/Input/Input';
import { addNote } from '../utils/network-data';
import LocaleContext from '../context/LocaleContext';

const AddPage = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const { locale } = useContext(LocaleContext);
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
    <BodyLayout titlePage={locale === 'id' ? 'Tambah Catatan' : 'Add Note'}>
      <div className="note-input">
        <form onSubmit={onSubmitChange}>
          <p className="note-input__title__char-limit">{locale === 'id' ? `Maksimal ${limit} karakter` : `Maximum ${limit} characters`}</p>
          <Input type="text" placeholder={locale === 'id' ? 'Ini adalah judul ...' : 'This is a title ...'} onChange={onTitleChange} value={title} styling="note-input__title" />
          <textarea className="note-input__body" placeholder={locale === 'id' ? 'Ini adalah isi catatan ...' : 'This is a note ...'} onChange={onBodyChange} value={body} required></textarea>
          <button type="submit" className="note-input__button">
            {locale === 'id' ? 'Buat Catatan' : 'Create Note'}
          </button>
        </form>
      </div>
    </BodyLayout>
  );
};

export default AddPage;
