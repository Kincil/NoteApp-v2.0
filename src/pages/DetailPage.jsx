import { useContext, useEffect, useState } from 'react';
import PageLayout from '../components/Layout/BodyLayout';
import { useParams } from 'react-router';
import { showFormattedDate } from '../utils';
import { getNote } from '../utils/network-data';
import LocaleContext from '../context/LocaleContext';

const DetailPage = () => {
  const { id } = useParams();
  const [note, setNote] = useState([]);
  const { locale } = useContext(LocaleContext);

  useEffect(() => {
    getNote(id).then(({ data }) => {
      setNote(data);
    });
  }, [id]);

  return (
    <>
      <PageLayout titlePage={locale === 'id' ? 'Detail Catatan' : 'Detail Note'}>
        {!note ? (
          <div className="detail-page">
            <h3 className="detail-page__error">{locale === 'id' ? 'Catatan tidak ditemukan' : 'Note not found'}</h3>
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
