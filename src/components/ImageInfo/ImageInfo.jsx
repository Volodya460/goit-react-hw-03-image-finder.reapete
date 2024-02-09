import { Component } from 'react';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Loader } from '../Loader/Loader';
import { api } from '../../ApiSearch/Api';
import { Button } from '../Button/Button';
import { Modal } from '../Modal/Modal';
const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export class ImageInfo extends Component {
  state = {
    images: [],
    largePicture: '',
    totalHits: 0,
    page: 1,
    error: null,
    status: Status.IDLE,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchValue !== this.props.searchValue) {
      await this.setState({
        images: [],
        totalHits: 0,
        page: 1,
        error: null,
        status: Status.IDLE,
      });

      return this.takeImages();
    }
    if (prevState.page !== this.state.page && this.state.page !== 1) {
      return this.takeImages();
    }
  }

  takeImages = async () => {
    this.setState({ status: Status.PENDING });

    await api(this.props.searchValue, this.state.page)
      .then(respons => {
        if (respons.totalHits === 0) {
          this.setState({ status: Status.IDLE });
          return alert(`We dont find ${this.props.searchValue}`);
        }
        this.setState(prev => {
          return {
            ...prev,
            images: [...prev.images, ...respons.hits],
            status: Status.RESOLVED,
            totalHits: respons.totalHits,
          };
        });
      })
      .catch(error => {
        this.setState({ error, status: Status.REJECTED });
      });
  };

  loadMore = () => {
    this.setState(prev => {
      return { page: (prev.page += 1) };
    });
  };

  openModal = largePicture => {
    this.setState({ largePicture });
  };

  closeModale = () => {
    this.setState({ largePicture: '' });
  };

  render() {
    const { images, status, error, totalHits, largePicture } = this.state;

    if (largePicture) {
      return (
        <Modal largePicture={largePicture} closeModale={this.closeModale} />
      );
    }
    if (status === 'pending') {
      return <Loader />;
    }
    if (status === 'resolved') {
      return (
        <>
          <ImageGallery arr={images} openModal={this.openModal} />
          {images.length < totalHits && <Button loadMore={this.loadMore} />}
        </>
      );
    }
    if (status === 'rejected') {
      return <p>{error.message}</p>;
    }
  }
}
