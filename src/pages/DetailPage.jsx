import { useState } from 'react';
import PageLayout from '../components/Layout/PageLayout';
import { getAllNotes, getNote } from '../utils/local-data';
import { useParams } from 'react-router';

const DetailPage = () => {
  const { id } = useParams();
  const [note, setNote] = useState(getAllNotes());

  return (
    <>
      <PageLayout titlePage="Detail Catatan">
        <div className="detail-page">
          <h3 className="detail-page__title">{note.title}</h3>
          <p className="detail-page__createdAt">{note.createdAt}</p>
          <p className="detail-page__body">{note.body}</p>
        </div>
      </PageLayout>
    </>
  );
};

DetailPage.propTypes = {};

export default DetailPage;
