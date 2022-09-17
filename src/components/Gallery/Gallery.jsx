import GalleryItem from '../GalleryItem/GalleryItem';
import * as SC from './Gallery.styled';
import PropTypes from 'prop-types';

export const Gallery = ({ array }) => {
  return (
    <SC.Ul>
      {array.map(({ title, poster, vote, id }) => {
        return (
          <SC.Li key={id}>
            <GalleryItem id={id} title={title} poster={poster} vote={vote} />
          </SC.Li>
        );
      })}
    </SC.Ul>
  );
};

export default Gallery;

Gallery.propTypes = {
  array: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string.isRequired,
      poster: PropTypes.string,
      vote: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
