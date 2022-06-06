import { createContext, useState } from 'react';

const PaymentContext = createContext();

export default PaymentContext;

export function PaymentProvider({ children }) {
  const [payment, setPayment] = useState(false);

  return <PaymentContext.Provider value={{ payment, setPayment }}>{children}</PaymentContext.Provider>;
}
