import { useContext } from 'react';
import ReserveContext from '../contexts/ReserveContext';

export default function useReserve() {
  return useContext(ReserveContext);
}
