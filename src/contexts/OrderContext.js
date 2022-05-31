import { createContext, useState } from 'react';

const OrderContext = createContext();

export default OrderContext;

export function OrderProvider({ children }) {
  const [orderData, setOrderData] = useState({
    ticketType: '',
    ticketPrice: 0,
    accomodationType: '',
    accomodationPrice: 0,
  });

  console.log(orderData);

  return <OrderContext.Provider value={{ orderData, setOrderData }}>{children}</OrderContext.Provider>;
}
