import styled from 'styled-components';
import { HiSearch } from 'react-icons/hi';
import { Field, Form } from 'formik';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: ${p => p.theme.space[3]}px;
`;

export const FormSearchbar = styled(Form)`
  width: 360px;
  display: flex;
  justify-content: center;
  align-items: stretch;
`;

export const ButtonForm = styled.button`
  padding: ${p => p.theme.space[3]}px;
  margin-right: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.normal};
  border: none;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.darkRed};
  box-shadow: ${p => p.theme.shadow.black};
  cursor: pointer;

  font-weight: ${p => p.theme.fontWeights.bold};
  text-shadow: ${p => p.theme.shadow.black};

  transition-property: transform;
  transition-timing-function: linear;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.03);
  }
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
