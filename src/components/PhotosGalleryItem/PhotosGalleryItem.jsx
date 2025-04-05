import css from './PhotosGalleryItem.module.css';

const PhotosGalleryItem = ({ image, openModal }) => {
  const { avg_color, src, alt } = image;

  return (
    <div
      className={css.thumb}
      style={{ backgroundColor: avg_color, borderColor: avg_color }}
    >
      <img
        src={src.large}
        alt={alt}
        onClick={() => openModal(src.large, alt)}
      />
    </div>
  );
};
export default PhotosGalleryItem;
