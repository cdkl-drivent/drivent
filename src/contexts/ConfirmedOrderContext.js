import { createContext, useState } from 'react';

const ConfirmedOrderContext = createContext();

export default ConfirmedOrderContext;

export function ConfirmedOrderProvider({ children }) {
  const [confirmedOrder, setConfirmedOrder] = useState();

  return (
    <ConfirmedOrderContext.Provider value={{ confirmedOrder, setConfirmedOrder }}>
      {children}
    </ConfirmedOrderContext.Provider>
  );
}
