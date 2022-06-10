import Card from '../Card';
import ChosenTicket from '../ChosenTicket/ChosenTicket';
import { SCFinalizePayment } from './styled';
import usePayment from '../../hooks/usePayment';
import ConfirmationMsg from '../ConfirmationMsg/ConfimationMsg';

export default function FinalizePayment({ orderData, payment }) {
  // const { payment } = usePayment();
  return (
    <SCFinalizePayment>
      <ChosenTicket {...orderData} />
      {!payment ? (
        <>
          <Card />
        </>
      ) : (
        <ConfirmationMsg />
      )}
    </SCFinalizePayment>
  );
}
