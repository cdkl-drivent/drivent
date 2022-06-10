import styled from 'styled-components';

export default function ConfirmationMsg() {
  return (
    <>
      <Msg>
        <ion-icon name="checkmark-circle"></ion-icon>
        <Text>
          <h2>Pagamento Confirmado!</h2>
          <p>Prossiga para escolha de hospedagem e atividades</p>
        </Text>
      </Msg>
    </>
  );
}

const Msg = styled.div`
  font-size: 16px;
  display: flex;
  ion-icon {
    color: #36b853;
    font-size: 45px;
    margin-right: 5px;
  }
`;

const Text = styled.div`
  flex-direction: column;
  margin-top: 5px;
  h2 {
    font-weight: 400;
  }
  ,
  p {
    font-weight: 400;
  }
`;
