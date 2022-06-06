import Card from '../Card';
import ChosenTicket from '../ChosenTicket/ChosenTicket';
import { SCFinalizePayment } from './styled';

export default function FinalizePayment({ orderData }) {
  return (
    <SCFinalizePayment>
      <ChosenTicket {...orderData} />
      <Card />
    </SCFinalizePayment>
  );
}
