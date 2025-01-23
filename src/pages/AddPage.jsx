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

// import PropTypes from 'prop-types';
// import React from 'react';
// import PageLayout from '../components/Layout/PageLayout';

// export default class AddPage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: '',
//       body: '',
//       charLimit: 50,
//     };

//     this.onTitleChange = this.onTitleChange.bind(this);
//     this.onBodyChange = this.onBodyChange.bind(this);
//     this.onSubmitChange = this.onSubmitChange.bind(this);
//   }
//   // Method event handler
//   onTitleChange(event) {
//     const newLimit = event.target.value;
//     if (newLimit.length <= this.state.charLimit) {
//       this.setState({ title: newLimit });
//     }
//   }

//   onBodyChange(event) {
//     this.setState(() => {
//       return {
//         body: event.target.value,
//       };
//     });
//   }

//   onSubmitChange(event) {
//     event.preventDefault();
//     this.props.addNotes(this.state);
//     alert('Catatan berhasil ditambahkan');
//   }

//   render() {
//     const limit = this.state.charLimit - this.state.title.length;

//     return (
//       <PageLayout titlePage="Tambah Catatan">
//         <div className="note-input">
//           <form onSubmit={this.onSubmitChange}>
//             <p className="note-input__title__char-limit">Sisa Karakter: {limit}</p>
//             <input type="text" className="note-input__title" placeholder="Ini adalah judul ..." onChange={this.onTitleChange} value={this.state.title} required />
//             <textarea className="note-input__body" placeholder="Tuliskan catatanmu di sini ..." onChange={this.onBodyChange} value={this.state.body} required></textarea>
//             <button type="submit">Buat Catatan</button>
//           </form>
//         </div>
//       </PageLayout>
//     );
//   }
// }
