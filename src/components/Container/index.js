import styled from 'styled-components';

export default styled.div`
  max-width: 922px;
  padding: 0 20px;
  margin: auto;
  width: 100%;
  ${props => (props.justify ? `justify-content: ${props.justify};` : '')}
  ${props => (props.align ? `align-items: ${props.align};` : '')}
  ${props => (props.flex ? 'display:flex;' : '')}
`;
