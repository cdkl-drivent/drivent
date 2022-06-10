import { createContext, useState } from 'react';

const HotelContext = createContext();

export default HotelContext;

export function HotelProvider({ children }) {
  const [hotel, setHotel] = useState(false);

  return <HotelContext.Provider value={{ hotel, setHotel }}>{children}</HotelContext.Provider>;
}
