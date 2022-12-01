// Під час кліку на елемент галереї повинно відкриватися модальне вікно з темним оверлеєм
// і відображатися велика версія зображення. Модальне вікно повинно закриватися
// по натисканню клавіші ESC або по кліку на оверлеї.

// Зовнішній вигляд схожий на функціонал цього VanillaJS-плагіна, тільки замість білого
// модального вікна рендериться зображення (у прикладі натисніть Run). Анімацію робити не потрібно!

//

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
