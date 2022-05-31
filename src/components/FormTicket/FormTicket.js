import { useContext } from 'react';
import OrderContext from '../../contexts/OrderContext';
import Ticket from '../Ticket';
import { SCFormTicket, SCSubContainer, SCSecondaryText } from './styled';

export default function FormTicket() {
  const { orderData, setOrderData } = useContext(OrderContext);

  function handleSelection(e) {
    e.preventDefault();
    // eslint-disable-next-line
    console.log(data);
  }

  return (
    <SCFormTicket onSubmit={handleSelection}>
      <SCSubContainer>
        <SCSecondaryText>Primeiro, escolha sua modalidade de ingresso</SCSecondaryText>
        <Ticket orderData={orderData} setOrderData={setOrderData} />
      </SCSubContainer>
    </SCFormTicket>
  );
}
