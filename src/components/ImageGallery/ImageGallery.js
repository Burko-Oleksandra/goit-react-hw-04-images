import PropTypes from 'prop-types';
import { List } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem';

export default function ImageGallery({ gallery }) {
  return (
    <List>
      {gallery.map(image => (
        <ImageGalleryItem
          key={image.id}
          imageUrl={image.webformatURL}
          largeImageUrl={image.largeImageURL}
          text={image.tags}
        />
      ))}
    </List>
  );
}

ImageGallery.propTypes = {
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
};
