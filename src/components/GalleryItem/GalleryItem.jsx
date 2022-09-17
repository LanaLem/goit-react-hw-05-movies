import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { Box } from '../../constants';
import Template from '../../constants/TemplateFilm.jpg';
import * as SC from './GalleryItem.styled';

export const GalleryItem = ({ title, poster, vote, id }) => {
  const location = useLocation();

  return (
    <SC.StyledLink id={id} to={`/movies/${id}`} state={{ from: location }}>
      <SC.H2>{title}</SC.H2>
      <SC.Image
        src={poster ? `https://image.tmdb.org/t/p/w500${poster}` : Template}
        alt={title}
      />
      <Box mb={2}>
        <SC.TextSpan>Votes: </SC.TextSpan>
        {vote}
      </Box>
    </SC.StyledLink>
  );
};

export default GalleryItem;

GalleryItem.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string,
  vote: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};
