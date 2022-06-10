import styled from 'styled-components';
import useReserve from '../../../hooks/useReserve';
import useToken from '../../../hooks/useToken';
import * as orderApi from '../../../services/orderApi';

export default function ReserveButton({ orderData }) {
  const token = useToken();
  const { setReserve } = useReserve();
  const order = {
    ticketType: orderData.ticketType,
    accomodationType: orderData.accomodationType,
    price: orderData.ticketPrice + orderData.accomodationPrice,
  };

  async function handleReservation(e) {
    e.preventDefault();
    try {
      await orderApi.createOrUpdate(order, token);
      setReserve(true);
    } catch (e) {
      console.log(e);
    }
  }

  return <StyledReserveButton onClick={handleReservation}>RESERVAR INGRESSO</StyledReserveButton>;
}

const StyledReserveButton = styled.button`
  height: 37px;
  width: 162px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: #e0e0e0;
  box-shadow: 0px 2px 10px 0px #00000040;
  border: none;
`;
