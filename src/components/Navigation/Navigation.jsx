import { Box } from '../../constants';
import * as SC from './Navigation.styled';

const Navigation = () => {
  return (
    <Box display="flex" justifyContent="center">
      <SC.Nav>
        <SC.Link to="/">Home</SC.Link>
        <SC.Link to="/movies">Movies</SC.Link>
      </SC.Nav>
    </Box>
  );
};

export default Navigation;
