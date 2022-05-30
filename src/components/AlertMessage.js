import { Box } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

function AlertMessage({ message }) {
  return (
    <StyledBox>
      <Message>{message}</Message>
    </StyledBox>
  );
}

export default AlertMessage;

const Message = styled.p`
  width: 388px;
  height: 46px;
  font-family: 'arial';
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #8e8e8e;
`;

const StyledBox = styled(Box)`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
