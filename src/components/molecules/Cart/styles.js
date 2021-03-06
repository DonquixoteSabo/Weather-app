import styled from 'styled-components';

export const Card = styled.article`
  width: 120px;
  height: 177px;
  background-color: ${props => props.theme.colors.mirage};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  color: ${props => props.theme.colors.athensGray};
  font-weight: 500;
  margin: 10px;
`;

export const CardImage = styled.img`
  width: 60px;
`;
export const CardContent = styled.ul`
  display: flex;
  width: 100%;
  font-size: ${props => props.theme.fontSize.m};
  justify-content: space-evenly;
  & li:nth-child(2) {
    color: ${props => props.theme.colors.santasGray};
  }
`;
