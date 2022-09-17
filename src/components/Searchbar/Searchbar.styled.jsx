import styled from 'styled-components';
import { HiSearch } from 'react-icons/hi';
import { Field } from 'formik';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: ${p => p.theme.space[3]}px;
`;

export const SearchbarWrap = styled.div`
  width: 280px;
  display: flex;
  border: 2px solid ${p => p.theme.colors.darkRed};
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.white};
  &:hover,
  &:focus {
    border-color: ${p => p.theme.colors.red};
  }
`;

export const IconSearch = styled(HiSearch)`
  font-size: 38px;
  color: ${p => p.theme.colors.darkRed};
  ${SearchbarWrap}:hover & {
    color: ${p => p.theme.colors.red};
  }
  ${SearchbarWrap}:focus & {
    color: ${p => p.theme.colors.red};
  }
`;

export const InputSearchbar = styled(Field)`
  padding: ${p => p.theme.space[3]}px;
  border: none;
  outline: none;
`;
