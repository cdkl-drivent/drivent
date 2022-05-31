import Accomodation from '../Accomodation';
import { SCFormAccomodation, SCSubContainer, SCSecondaryText } from './styled';

import { useContext } from 'react';
import OrderContext from '../../contexts/OrderContext';

export default function FormAccomodation() {
  const { orderData, setOrderData } = useContext(OrderContext);

  function handleSelection(e) {
    e.preventDefault();
    // eslint-disable-next-line
    console.log(data);
  }

  return (
    <SCFormAccomodation onSubmit={handleSelection}>
      <SCSubContainer>
        <SCSecondaryText>Ótimo! Agora escolha sua modalidade de hospedagem</SCSecondaryText>
        <Accomodation orderData={orderData} setOrderData={setOrderData} />
      </SCSubContainer>
    </SCFormAccomodation>
  );
}
