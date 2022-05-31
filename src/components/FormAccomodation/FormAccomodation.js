import { useState } from 'react';
import Accomodation from '../Accomodation';
import { SCFormAccomodation, SCSubContainer, SCSecondaryText } from './styled';

export default function FormAccomodation() {
  const [data, setData] = useState({
    accomodationType: '',
    accomodationPrice: '',
  });

  function handleSelection(e) {
    e.preventDefault();
    // eslint-disable-next-line
    console.log(data);
  }

  return (
    <SCFormAccomodation onSubmit={handleSelection}>
      <SCSubContainer>
        <SCSecondaryText>Ótimo! Agora escolha sua modalidade de hospedagem</SCSecondaryText>
        <Accomodation data={data} setData={setData} />
      </SCSubContainer>
    </SCFormAccomodation>
  );
}
