import styled from 'styled-components';
import ReserveButton from '../ReserveButton/ReserveButton';

export default function TicketSummary({ orderData }) {
  const totalPrice =
    orderData !== 'Online' ? orderData.ticketPrice + orderData.accomodationPrice : orderData.ticketPrice;

  return (
    <>
      <StyledSummary>Fechado! O total ficou em R$ {totalPrice * 0.01}. Agora é só confirmar.</StyledSummary>
      <ReserveButton />
    </>
  );
}

const StyledSummary = styled.p`
  font-family: 'arial';
  font-weight: 400;
  font-size: 34px;
  line-height: 40px;
  color: #000000;

  margin-top: 37px;
`;
