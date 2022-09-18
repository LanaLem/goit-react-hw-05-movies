import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import * as SC from './Searchbar.styled';

const initialValues = { search: '' };
const schema = yup.object().shape({
  search: yup.string().required(toast('Уведіть запит, будь ласка :)')),
});

export const Searchbar = ({ changeSearch }) => {
  return (
    <SC.Header>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={changeSearch}
      >
        <SC.FormSearchbar>
          <SC.ButtonForm type="submit">
            <span>Пошук</span>
          </SC.ButtonForm>

          <SC.SearchbarWrap>
            <SC.IconSearch />
            <SC.InputSearchbar
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search"
              name="search"
            />
          </SC.SearchbarWrap>
        </SC.FormSearchbar>
      </Formik>
    </SC.Header>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  changeSearch: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};
