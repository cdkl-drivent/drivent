import usePayment from '../../hooks/usePayment';
import useReserve from '../../hooks/useReserve';
import { SCFinalizeButtons } from './styled';

export default function FinalizeButtons() {
  const { setReserve } = useReserve();
  const { setPayment } = usePayment();

  function handleFinalize() {
    setPayment(true);
  };

  return (
    <SCFinalizeButtons>
      <button onClick={() => setReserve(false)}>Voltar</button>
      <button onClick={handleFinalize}>Finalizar Pagamento</button>
    </SCFinalizeButtons>
  );
}
