// Список карток зображень. Створює DOM-елемент наступної структури.
import { List } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem';
// import { Component } from 'react';

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
