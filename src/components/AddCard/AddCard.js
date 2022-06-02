import styled from 'styled-components';
import { SCSecondaryText } from '../FormTicket/styled';
export default function AddCard() {
  return (
    <SCAddCard>
      <SCSecondaryText>Pagamento</SCSecondaryText>
      <div>
        <SCSecondaryText>Adicione o cartão aqui</SCSecondaryText>
      </div>
    </SCAddCard>
  );
}

const SCAddCard = styled.div`
  width: 706px;

  div {
    width: 100%;
    height: 225px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000000;
  }
`;
