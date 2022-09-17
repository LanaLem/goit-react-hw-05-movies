import styled from 'styled-components';

export const Img = styled.img`
  display: block;
  width: 100%;

  border-radius: ${p => p.theme.radii.normal};
`;

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 200px;
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadow.black};

  transition-property: transform;
  transition-timing-function: linear;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.03);
  }
`;

export const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 0fr);
  gap: 1em;
  justify-content: center;
  padding: ${p => p.theme.space[4]}px;
`;

export const H3 = styled.h3`
  text-align: center;
  background-color: ${p => p.theme.colors.darkRed};
  color: ${p => p.theme.colors.white};
`;

export const Span = styled.span`
  color: ${p => p.theme.colors.darkRed};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-shadow: ${p => p.theme.shadow.black};
`;
