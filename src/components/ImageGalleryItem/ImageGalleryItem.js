import { Component } from 'react';
import Modal from '../Modal';
import { Image } from './ImageGalleryItem.styled';

export default class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { imageUrl, text, largeImageUrl } = this.props;
    const { showModal } = this.state;
    return (
      <li onClick={this.toggleModal}>
        <Image src={imageUrl} alt={text} width="250" height="166" />
        {showModal && (
          <Modal
            largeImageUrl={largeImageUrl}
            text={text}
            onModalClose={this.toggleModal}
          />
        )}
      </li>
    );
  }
}
