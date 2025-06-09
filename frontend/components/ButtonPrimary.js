
import styled from 'styled-components';

const ButtonPrimary = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-family: ${({ theme }) => theme.fonts.primary};
  border: none;
  cursor: pointer;
`;

export default ButtonPrimary;
