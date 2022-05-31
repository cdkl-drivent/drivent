import { useState } from 'react';
import Ticket from '../Ticket';
import { SCFormTicket, SCSubContainer, SCSecondaryText } from './styled';

export default function FormTicket() {
  const [data, setData] = useState({
    ticketType: '',
    ticketPrice: '',
    hotel: '',
  });

  function handleSelection(e) {
    e.preventDefault();
    // eslint-disable-next-line
    console.log(data);
  }

  return (
    <SCFormTicket onSubmit={handleSelection}>
      <SCSubContainer>
        <SCSecondaryText>Primeiro, escolha sua modalidade de ingresso</SCSecondaryText>
        <Ticket data={data} setData={setData} />
      </SCSubContainer>
    </SCFormTicket>
  );
}
