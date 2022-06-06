import Card from '../Card';
import ChosenTicket from '../ChosenTicket/ChosenTicket';
import { SCFinalizePayment } from './styled';
import usePayment from '../../hooks/usePayment';
import ConfirmationMsg from '../ConfirmationMsg/ConfimationMsg';
import FinalizeButtons from '../FinalizeButtons/FinalizeButtons';

export default function FinalizePayment({ orderData }) {
  const { payment } = usePayment();
  return (
    <SCFinalizePayment>
      <ChosenTicket {...orderData} />
      {!payment ? 
        (
          <>
            <Card />
            <FinalizeButtons />
          </>
        )
        :
        (
          <ConfirmationMsg />
        )
      }
      <Card />
    </SCFinalizePayment>
  );
}
