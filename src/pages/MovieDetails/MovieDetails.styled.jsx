import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const H2 = styled.h2`
  margin-bottom: ${p => p.theme.space[3]}px;
  text-transform: uppercase;
  color: ${p => p.theme.colors.darkRed};
  text-shadow: ${p => p.theme.shadow.redText};
`;

export const Link = styled(NavLink)`
  display: inline-block;
  margin-left: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.normal};
  padding: ${p => p.theme.space[3]}px;
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

export const Img = styled.img`
  display: block;
  width: 480px;
  margin-right: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.normal};
`;

export const P = styled.p`
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const Span = styled.span`
  color: ${p => p.theme.colors.darkRed};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-shadow: ${p => p.theme.shadow.black};
`;
