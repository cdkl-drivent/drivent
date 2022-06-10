import { useContext } from 'react';
import HotelContext from '../contexts/HotelContext';

export default function useHotel() {
  return useContext(HotelContext);
}
