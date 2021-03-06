import styled from 'styled-components';

const HightlightWrapper = styled.section`
  width: 350px;
  background-color: ${props => props.theme.colors.mirage};
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  color: ${props => props.theme.colors.athensGray};
`;
export default HightlightWrapper;
