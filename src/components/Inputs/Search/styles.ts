import styled from 'styled-components';

type ContainerProps = {
  margin?: string;
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: ${props => props.margin};
`;
