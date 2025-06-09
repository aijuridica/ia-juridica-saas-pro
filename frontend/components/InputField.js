
import styled from 'styled-components';

const InputField = styled.input`
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-family: ${({ theme }) => theme.fonts.secondary};
`;

export default InputField;
