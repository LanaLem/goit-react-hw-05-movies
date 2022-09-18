import styled from 'styled-components';

export const Span = styled.span`
  color: ${p => p.theme.colors.darkRed};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-shadow: ${p => p.theme.shadow.black};
`;

export const Img = styled.img`
  display: block;
  width: 62px;
  margin-right: ${p => p.theme.space[3]}px;

  border-radius: ${p => p.theme.radii.normal};
`;

export const Li = styled.li`
  display: flex;
  padding: ${p => p.theme.space[3]}px;

  margin-bottom: ${p => p.theme.space[4]}px;
  box-shadow: ${p => p.theme.shadow.black};
`;

export const P = styled.p`
  text-align: center;
  color: ${p => p.theme.colors.darkRed};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: 24px;
`;
