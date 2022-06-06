import Card from '../Card';
import ChosenTicket from '../ChosenTicket/ChosenTicket';
import FinalizeButtons from '../FinalizeButtons/FinalizeButtons';
import { SCFinalizePayment } from './styled';

export default function FinalizePayment({ orderData }) {
  return (
    <SCFinalizePayment>
      <ChosenTicket {...orderData} />
      <Card />
    </SCFinalizePayment>
  );
}
