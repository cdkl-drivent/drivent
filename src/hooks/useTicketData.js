import { useContext } from 'react';
import OrderContext from '../contexts/OrderContext';

export default function useTicketData() {
  const orderContext = useContext(OrderContext);

  if (!orderContext) {
    throw new Error('useTicketData must be used inside a OrderContext Provider');
  }

  console.log(orderContext);

  return { orderContext };
}
