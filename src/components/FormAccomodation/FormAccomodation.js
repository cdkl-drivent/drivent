import { useState } from 'react';
import Accomodation from '../Accomodation';
import { SCFormAccomodation, SCSubContainer } from './styled';

export default function FormAccomodation() {
  const [data, setData] = useState({
    accomodationType: '',
    accomodationPrice: '',
  });

  function handleSelection(e) {
    e.preventDefault();
    console.log(data);
  }

  return (
    <SCFormAccomodation onSubmit={handleSelection}>
      <SCSubContainer>
        <p>Ótimo! Agora escolha sua modalidade de hospedagem</p>
        <Accomodation data={data} setData={setData} />
      </SCSubContainer>
    </SCFormAccomodation>
  );
}
