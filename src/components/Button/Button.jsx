import { PropTypes } from 'prop-types';
import * as SC from './Button.styled';

export const Button = ({ func, text, type }) => {
  return (
    <SC.Button type={type} onClick={func}>
      {text}
    </SC.Button>
  );
};

Button.propTypes = {
  func: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
