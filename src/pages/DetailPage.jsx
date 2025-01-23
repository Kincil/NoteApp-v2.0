import PageLayout from '../components/Layout/PageLayout';

const DetailPage = () => {
  return (
    <>
      <PageLayout titlePage="Detail Catatan">
        <div className="detail-page">
          <h3 className="detail-page__title"></h3>
          <p className="detail-page__createdAt"></p>
          <p className="detail-page__b"></p>
        </div>
      </PageLayout>
    </>
  );
};

DetailPage.propTypes = {};

export default DetailPage;
