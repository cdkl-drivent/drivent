import AddCard from '../AddCard/AddCard';
import ChosenTicket from '../ChosenTicket/ChosenTicket';
import FinalizeButtons from '../FinalizeButtons/FinalizeButtons';
import { SCFinalizePayment } from './styled';

export default function FinalizePayment({ orderData }) {
  return (
    <SCFinalizePayment>
      <ChosenTicket {...orderData} />
      <AddCard />
      <FinalizeButtons />
    </SCFinalizePayment>
  );
}
