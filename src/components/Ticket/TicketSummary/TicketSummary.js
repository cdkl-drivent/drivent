import styled from 'styled-components';
import { SCSecondaryText } from '../../FormTicket/styled';
import ReserveButton from '../ReserveButton/ReserveButton';

export default function TicketSummary({ orderData }) {
  const totalPrice =
    orderData !== 'Online' ? orderData.ticketPrice + orderData.accomodationPrice : orderData.ticketPrice;

  return (
    <>
      <SCReserveButton>Fechado! O total ficou em R$ {totalPrice * 0.01}. Agora é só confirmar.</SCReserveButton>
      <ReserveButton />
    </>
  );
}

const SCReserveButton = styled(SCSecondaryText)`
  margin: 30px 0 17px;
`;
