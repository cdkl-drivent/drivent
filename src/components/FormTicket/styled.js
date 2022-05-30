import styled from 'styled-components';

const SCFormTicket = styled.form`
  display: flex;
  flex-direction: column;
  gap: 44px;
`;

const SCSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
  p {
    font-family: 'arial';
    font-size: 20px;
    line-height: 23px;
  }
`;

export { SCFormTicket, SCSubContainer };
