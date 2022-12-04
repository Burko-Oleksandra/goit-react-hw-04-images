import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import { Image } from './ImageGalleryItem.styled';

export default function ImageGalleryItem({ imageUrl, text, largeImageUrl }) {
  const [showModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal(!showModal);
  }

  return (
    <li onClick={toggleModal}>
      <Image src={imageUrl} alt={text} width="250" height="166" />
      {showModal && (
        <Modal
          largeImageUrl={largeImageUrl}
          text={text}
          onClick={toggleModal}
        />
      )}
    </li>
  );
}

// export default class ImageGalleryItem extends Component {
//   state = {
//     showModal: false,
//   };

//   toggleModal = () => {
//     this.setState(({ showModal }) => ({
//       showModal: !showModal,
//     }));
//   };

//   render() {
//     const { imageUrl, text, largeImageUrl } = this.props;
//     const { showModal } = this.state;
//     return (
//       <li onClick={this.toggleModal}>
//         <Image src={imageUrl} alt={text} width="250" height="166" />
//         {showModal && (
//           <Modal
//             largeImageUrl={largeImageUrl}
//             text={text}
//             onClick={this.toggleModal}
//           />
//         )}
//       </li>
//     );
//   }
// }

ImageGalleryItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  largeImageUrl: PropTypes.string.isRequired,
};
