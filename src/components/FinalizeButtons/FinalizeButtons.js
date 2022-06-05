import useReserve from '../../hooks/useReserve';
import { SCFinalizeButtons } from './styled';

export default function FinalizeButtons() {
  const { setReserve } = useReserve();
  return (
    <SCFinalizeButtons>
      <button onClick={() => setReserve(false)}>Voltar</button>
      <button onClick={() => alert('função finalizar')}>Finalizar Pagamento</button>
    </SCFinalizeButtons>
  );
}
