import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${p => p.theme.colors.darkRed};
`;

export const H2 = styled.h2`
  height: 36px;
  padding: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.16;
  text-transform: uppercase;

  text-shadow: ${p => p.theme.shadow.redText};
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 396px;
  object-fit: cover;
  border-radius: ${p => p.theme.radii.normal};
`;

export const TextSpan = styled.span`
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.darkRed};
  text-shadow: ${p => p.theme.shadow.black};
`;

export const Button = styled.button`
  padding: ${p => p.theme.space[3]}px;
  margin-right: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.normal};
  border: none;
  background-color: transparent;
  box-shadow: ${p => p.theme.shadow.black};

  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.darkRed};
  text-shadow: ${p => p.theme.shadow.black};

  cursor: pointer;

  transition-property: transform;
  transition-timing-function: linear;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.01);
    box-shadow: ${p => p.theme.shadow.redText};
  }
`;
