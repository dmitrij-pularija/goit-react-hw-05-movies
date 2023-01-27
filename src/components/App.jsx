import { Component } from 'react';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';
import getImages from '../services/Api';
import Buttons from './Buttons/Buttons';
import Searchbar from './Searchbar/Searchbar';
import Notification from './Notification/Notification';
import ImageGallery from './ImageGallery/ImageGallery';

class App extends Component {
  state = {
    filter: 'ukraine',
    page: 1,
    images: [],
    loading: false,
    totalPage: 0,
    error: false,
    modalShow: false,
    modalUrl: '',
    modalAlt: '',
  };

  async componentDidMount() {
    this.queryImages();
  }

  componentDidUpdate(_, prevState) {
    const prevQuery = prevState.filter;
    const nextQuery = this.state.filter;
    const prevPage = prevState.page;
    const nextPage = this.state.page;
    if (prevQuery !== nextQuery || prevPage !== nextPage) this.queryImages();
  }

  queryImages = async () => {
    this.setState({ loading: true });
    const { filter, page } = this.state;
    try {
      const response = await getImages(filter, page);
      const images = response.hits.map(image => ({
        id: image.id,
        webformatURL: image.webformatURL,
        largeImageURL: image.largeImageURL,
        tags: image.tags,
      }));
      const totalPage = Math.ceil(response.totalHits / 12);
      this.setState({ totalPage, images });
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  handleSubmit = event => {
    const {
      filter: { value },
    } = event.target.elements;
    this.setState({
      filter: value,
      page: 1,
      images: [],
      error: false,
      loading: false,
    });
  };

  pagination = event => {
    let {
      target: { text },
    } = event;
    let page = this.state.page;
    if (!text) text = event.target.innerHTML;
    if (text.includes('…')) return;
    if (Number.isInteger(Number(text))) page = Number(text);
    if (text.includes('›')) ++page;
    if (text.includes('‹')) --page;
    this.setState({ page });
  };

  modalOpen = (modalUrl, modalAlt) => {
    this.setState({ modalUrl, modalAlt }, () => this.modalToggle());
  };

  modalToggle = () => {
    document.querySelector('body').classList.toggle('no-scroll');
    this.setState(({ modalShow }) => ({
      modalShow: !modalShow,
    }));
  };

  render() {
    const {
      images,
      page,
      totalPage,
      modalShow,
      modalUrl,
      modalAlt,
      loading,
      error,
    } = this.state;

    return (
      <>
        <Searchbar formSubmit={this.handleSubmit} />
        {loading && <Loader />}
        {images.length && !loading && (
          <ImageGallery images={images} onClick={this.modalOpen} />
        )}
        {images.length && !loading && (
          <Buttons
            onPagination={this.pagination}
            total={totalPage}
            curent={page}
          />
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
          <Modal onClose={this.modalToggle}>
            <img src={modalUrl} alt={modalAlt} />
          </Modal>
        )}
      </>
    );
  }
}

export default App;