import PropTypes from 'prop-types';
import * as SC from './Modal.styled';

export const Modal = ({ image, closeModal }) => {
  return (
    <SC.Overlay>
      <SC.ModalForm>
        <SC.Button type="button" onClick={closeModal}>
          Close
        </SC.Button>
        <img src={`https://image.tmdb.org/t/p/w500${image}`} alt="poster" />
      </SC.ModalForm>
    </SC.Overlay>
  );
};

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
