import styled from 'styled-components';

export const Button = styled.button`
  padding: ${p => p.theme.space[3]}px;
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
