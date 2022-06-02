import styled from 'styled-components';

const SCChosenTicket = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;

  div {
    width: 290px;
    height: 108px;
    background-color: #ffeed2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 20px;

    p {
      color: #454545;
      font-size: 16px;
      line-height: 18.75px;
    }

    strong {
      color: #898989;
      font-size: 14px;
      line-height: 16.41px;
      font-weight: 400;
    }
  }
`;

export { SCChosenTicket };
