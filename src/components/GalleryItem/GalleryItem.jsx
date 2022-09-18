import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
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
      <SC.P>
        <SC.TextSpan>Votes: </SC.TextSpan>
        <SC.VoteSpan>{Number(vote).toFixed(1)}</SC.VoteSpan>
      </SC.P>
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
