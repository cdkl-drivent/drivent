import { useState } from 'react';
import Ticket from '../Ticket';
import { SCFormTicket, SCSubContainer } from './styled';

export default function FormTicket() {
  const [data, setData] = useState({
    ticketType: '',
    ticketPrice: '',
    hotel: '',
  });

  function handleSelection(e) {
    e.preventDefault();
    console.log(data);
  }

  return (
    <SCFormTicket onSubmit={handleSelection}>
      <SCSubContainer>
        <p>Primeiro, escolha sua modalidade de ingresso</p>
        <Ticket data={data} setData={setData} />
      </SCSubContainer>
    </SCFormTicket>
  );
}
