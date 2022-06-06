import { Button } from '@material-ui/core';
import styled from 'styled-components';

function Buttons({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

export default Buttons;

const StyledButton = styled(Button)`
  margin-top: 50px;
  cursor: pointer;
`;
