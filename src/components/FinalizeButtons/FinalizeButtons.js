import usePayment from '../../hooks/usePayment';
import useReserve from '../../hooks/useReserve';
import Buttons from '../Buttons';
import { SCFinalizeButtons } from './styled';

export default function FinalizeButtons() {
  const { setReserve } = useReserve();
  const { setPayment } = usePayment();

  function handleFinalize() {
    setPayment(true);
  }

  return (
    <SCFinalizeButtons>
      <Buttons onClick={() => setReserve(false)} type="button">
        Voltar
      </Buttons>
      <Buttons onClick={handleFinalize}>Finalizar Pagamento</Buttons>
    </SCFinalizeButtons>
  );
}
