import { Component } from 'react';
import { createPortal } from 'react-dom';

import { Overlay, ModalImg } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleEscapeKey);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscapeKey);
  }

  handleBackdropClose = event => {
    if (event.currentTarget === event.target) {
      this.props.onClick();
    }
  };

  handleEscapeKey = event => {
    if (event.key === 'Escape') {
      this.props.onClick();
    }
  };

  render() {
    const { largeImageUrl, text, onClick } = this.props;
    return createPortal(
      <Overlay>
        <ModalImg>
          <img src={largeImageUrl} alt={text} onClick={onClick} />
        </ModalImg>
      </Overlay>,
      modalRoot
    );
  }
}
