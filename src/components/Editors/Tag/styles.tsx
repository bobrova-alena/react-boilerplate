import styled from 'styled-components';
import { theme } from 'src/theme';

export const Container = styled.div`
  display: flex;
  background-color: ${theme.colors.lightGray10};
  padding: 3px 7px;
  border-radius: 5px;
  width: fit-content;
`;
