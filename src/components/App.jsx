import { useState, useEffect } from 'react';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';
import getImages from '../services/Api';
import Buttons from './Buttons/Buttons';
import Searchbar from './Searchbar/Searchbar';
import Notification from './Notification/Notification';
import ImageGallery from './ImageGallery/ImageGallery';

const App = () => {
  const [images, setImages] = useState([]);
  const [filter, setFilter] = useState('');
  const [pages, setPages] = useState({ page: 1, totalPage: 0 });
  const [state, setState] = useState({
    modalShow: false,
    loading: false,
    error: false,
  });
  const [modal, setModal] = useState({ modalUrl: '', modalAlt: '' });
  const { totalPage, page } = pages;

  useEffect(() => {
    setState(prevState => {
      return { ...prevState, loading: true };
    });

    getImages(filter, page)
      .then(({ hits, totalHits }) => {
        setPages(prevPages => {
          return { ...prevPages, totalPage: Math.ceil(totalHits / 12) };
        });
        setImages(
          hits.map(image => ({
            id: image.id,
            webformatURL: image.webformatURL,
            largeImageURL: image.largeImageURL,
            tags: image.tags,
          }))
        );
      })
      .catch(() => {
        setState(prevState => {
          return { ...prevState, error: true };
        });
      })
      .finally(() =>
        setState(prevState => {
          return { ...prevState, loading: false };
        })
      );
  }, [filter, page]);

  const handleSubmit = event => {
    const {
      filter: { value },
    } = event.target.elements;
    if (value !== filter) {
    setFilter(value);
    setImages([]);
    setPages({ page: 1, totalPage: 0 });
    setState({ modalShow: false, loading: false, error: false });
    }
  };

  const pagination = event => {
    let nextPage = page;
    let {
      target: { text },
    } = event;
    if (!text) text = event.target.innerHTML;
    if (text.includes('…')) return;
    if (Number.isInteger(Number(text))) nextPage = Number(text);
    if (text.includes('›')) ++nextPage;
    if (text.includes('‹')) --nextPage;
    setPages(prevPages => {
      return { ...prevPages, page: nextPage };
    });
  };

  const modalOpen = (modalUrl, modalAlt) => {
    setModal({ modalUrl, modalAlt });
    modalToggle();
  };

  const modalToggle = () => {
    document.querySelector('body').classList.toggle('no-scroll');
    setState(prevState => {
      return { ...prevState, modalShow: !modalShow };
    });
  };

  const { modalShow, loading, error } = state;
  const { modalUrl, modalAlt } = modal;

  return (
    <>
      <Searchbar formSubmit={handleSubmit} />
      {loading && <Loader />}
      {images.length && !loading && (
        <ImageGallery images={images} onClick={modalOpen} />
      )}
      {images.length && !loading && (
        <Buttons onPagination={pagination} total={totalPage} curent={page} />
      )}
      {!images.length && !loading && (
        <Notification
          message={
            error
              ? 'Something went wrong, please try again.'
              : 'Images not found'
          }
        />
      )}
      {modalShow && (
        <Modal onClose={modalToggle}>
          <img src={modalUrl} alt={modalAlt} />
        </Modal>
      )}
    </>
  );
};

export default App;