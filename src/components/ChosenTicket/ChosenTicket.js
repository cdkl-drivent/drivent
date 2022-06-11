import { SCSecondaryText } from '../FormTicket/styled';
import { SCChosenTicket } from './styled';

export default function ChosenTicket({ ticketType, ticketPrice, accomodationType, accomodationPrice, price }) {
  const ticket = ticketType === 'Online' ? ticketType : `${ticketType} + ${accomodationType}`;
  const value = price ? price / 100 : (ticketPrice + accomodationPrice) / 100;
  return (
    <SCChosenTicket>
      <SCSecondaryText>Ingresso escolhido</SCSecondaryText>
      <div>
        <p>{ticket}</p>
        <strong>{`R$ ${value}`}</strong>
      </div>
    </SCChosenTicket>
  );
}
