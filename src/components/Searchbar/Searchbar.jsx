import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import * as SC from './Searchbar.styled';

const initialValues = { search: '' };
const schema = yup.object().shape({
  search: yup.string().required(toast('Уведіть запит, будь ласка :)')),
});

export const Searchbar = ({ changeSearch, search }) => {
  return (
    <SC.Header>
      <Formik initialValues={initialValues} validationSchema={schema}>
        <SC.SearchbarWrap>
          <SC.IconSearch />
          <SC.InputSearchbar
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search"
            name="search"
            value={search}
            onChange={e => changeSearch(e.target.value)}
          />
        </SC.SearchbarWrap>
      </Formik>
    </SC.Header>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  changeSearch: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};
