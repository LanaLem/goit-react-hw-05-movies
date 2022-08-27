import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalForm = styled.div`
  position: relative;
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 0;
  position: absolute;
  right: 5px;
  top: 5px;

  width: 50px;
  padding: ${p => p.theme.space[2]}px;

  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.darkRed};

  background-color: transparent;
  border: none;
  border-radius: ${p => p.theme.radii.normal};

  transition-property: transform;
  transition-timing-function: linear;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: ${p => p.theme.shadow.redText};
    color: ${p => p.theme.colors.red};
    transform: scale(1.15);
  }
`;
