import styled from 'styled-components';

export const Ul = styled.ul`
  display: grid;
  align-items: center;
  gap: 1em;
  padding: ${p => p.theme.space[4]}px;
  grid-template-columns: repeat(4, 1fr);
`;

export const Li = styled.li`
  padding: ${p => p.theme.space[3]}px;
  width: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadow.black};
  cursor: pointer;

  transition-property: transform;
  transition-timing-function: linear;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.01);
    box-shadow: ${p => p.theme.shadow.red};
  }
`;