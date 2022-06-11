import { useContext } from 'react';
import ConfirmedOrderContext from '../contexts/ConfirmedOrderContext';

export default function useConfirmedOrder() {
  return useContext(ConfirmedOrderContext);
}
