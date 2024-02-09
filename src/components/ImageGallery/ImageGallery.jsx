import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export function ImageGallery({ arr, openModal }) {
  return (
    <ul className={css.ImageGallery}>
      {arr.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <ImageGalleryItem
            key={id}
            id={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            tags={tags}
            openModal={() => {
              openModal(largeImageURL);
            }}
          />
        );
      })}
    </ul>
  );
}
