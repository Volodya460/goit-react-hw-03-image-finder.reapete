import css from './ImageGalleryItem.module.css';
export function ImageGalleryItem({
  id,
  webformatURL,
  largeImageURL,
  tags,
  openModal,
}) {
  return (
    <li className={css.ImageGalleryItem} key={id}>
      <img
        src={webformatURL}
        alt={tags}
        className={css.ImageGalleryItem_image}
        onClick={openModal}
      />
    </li>
  );
}
