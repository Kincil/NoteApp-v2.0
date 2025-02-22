import { useState } from 'react';
import PageLayout from '../components/Layout/BodyLayout';
import { getNote } from '../utils/local-data';
import { useParams } from 'react-router';
import { showFormattedDate } from '../utils';

const DetailPage = () => {
  const { id } = useParams();
  const [note, setNote] = useState(getNote(id));

  return (
    <>
      <PageLayout titlePage="Detail Catatan">
        {!note ? (
          <div className="detail-page">
            <h3 className="detail-page__error">Catatan Tidak Ditemukan</h3>
          </div>
        ) : (
          <div className="detail-page">
            <h3 className="detail-page__title">{note.title}</h3>
            <p className="detail-page__createdAt">{showFormattedDate(note.createdAt)}</p>
            <p className="detail-page__body">{note.body}</p>
          </div>
        )}
      </PageLayout>
    </>
  );
};

export default DetailPage;
