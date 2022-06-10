import { createContext, useState } from 'react';

const ReserveContext = createContext();

export default ReserveContext;

export function ReserveProvider({ children }) {
  const [reserve, setReserve] = useState(false);

  return <ReserveContext.Provider value={{ reserve, setReserve }}>{children}</ReserveContext.Provider>;
}
