import styled from 'styled-components';

const SCFormAccomodation = styled.form`
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
    color: #8e8e8e;
  }
`;

export { SCFormAccomodation, SCSubContainer };
