import useReserve from '../../hooks/useReserve';
import Buttons from '../Buttons';
import { SCFinalizeButtons } from './styled';

export default function FinalizeButtons() {
  const { setReserve } = useReserve();
  return (
    <SCFinalizeButtons>
      <Buttons variant="contained" onClick={() => setReserve(false)}>
        VOLTAR
      </Buttons>
      <Buttons variant="contained" type="submit">
        FINALIZAR PAGAMENTO
      </Buttons>
    </SCFinalizeButtons>
  );
}
