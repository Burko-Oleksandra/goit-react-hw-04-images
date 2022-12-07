import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { Overlay, ModalImg } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ largeImageUrl, text, onClick }) {
  useEffect(() => {
    window.addEventListener('keydown', handleEscapeKey);

    return () => {
      window.removeEventListener('keydown', handleEscapeKey);
    };
  });

  function handleBackdropClose(event) {
    if (event.currentTarget === event.target) {
      onClick();
    }
  }

  function handleEscapeKey(event) {
    if (event.key === 'Escape') {
      onClick();
    }
    return;
  }

  return createPortal(
    <Overlay onClick={handleBackdropClose}>
      <ModalImg>
        <img src={largeImageUrl} alt={text} />
      </ModalImg>
    </Overlay>,
    modalRoot
  );
}

Modal.propTypes = {
  onClick: PropTypes.func.isRequired,
  largeImageUrl: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

// export default class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleEscapeKey);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleEscapeKey);
//   }

//   handleBackdropClose = event => {
//     if (event.currentTarget === event.target) {
//       this.props.onClick();
//     }
//   };

//   handleEscapeKey = event => {
//     if (event.key === 'Escape') {
//       this.props.onClick();
//     }
//   };

//   render() {
//     const { largeImageUrl, text, onClick } = this.props;
//     return createPortal(
//       <Overlay>
//         <ModalImg>
//           <img src={largeImageUrl} alt={text} onClick={onClick} />
//         </ModalImg>
//       </Overlay>,
//       modalRoot
//     );
//   }
// }
