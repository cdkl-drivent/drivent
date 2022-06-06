import AddCard from '../AddCard/AddCard';
import ChosenTicket from '../ChosenTicket/ChosenTicket';
import FinalizeButtons from '../FinalizeButtons/FinalizeButtons';
import { SCFinalizePayment } from './styled';
import usePayment from '../../hooks/usePayment';
import ConfirmationMsg from '../ConfirmationMsg/ConfimationMsg';

export default function FinalizePayment({ orderData }) {
  const { payment } = usePayment();
  return (
    <SCFinalizePayment>
      <ChosenTicket {...orderData} />
      {!payment ? 
        (
          <>
            <AddCard />
            <FinalizeButtons />
          </>
        )
        :
        (
          <ConfirmationMsg />
        )
      }
      
    </SCFinalizePayment>
  );
}
