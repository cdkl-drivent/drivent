import { SCSecondaryText } from '../FormTicket/styled';
import { SCChosenTicket } from './styled';

export default function ChosenTicket({ ticketType, ticketPrice, accomodationType, accomodationPrice }) {
  const ticket = ticketType === 'Online' ? ticketType : `${ticketType} + ${accomodationType}`;
  const price = (ticketPrice + accomodationPrice) / 100;
  return (
    <SCChosenTicket>
      <SCSecondaryText>Ingresso escolhido</SCSecondaryText>
      <div>
        <p>{ticket}</p>
        <strong>{`R$ ${price}`}</strong>
      </div>
    </SCChosenTicket>
  );
}
