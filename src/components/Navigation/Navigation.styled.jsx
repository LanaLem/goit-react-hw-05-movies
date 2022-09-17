import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  border-radius: ${p => p.theme.radii.normal};
  padding: ${p => p.theme.space[3]}px;
  margin-left: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.darkRed};

  text-decoration: none;

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

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[3]}px;

  box-shadow: ${p => p.theme.shadow.black};
`;
