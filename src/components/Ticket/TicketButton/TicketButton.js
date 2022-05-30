import styled from 'styled-components';

export default function TicketButton({ type, price, data, setData }) {
  function getInput(e) {
    e.stopPropagation();
    setData({ ...data, ticketType: e.target.value, ticketPrice: e.target.id });
  }

  return (
    <StyledTicketBox
      key={type}
      select={data.ticketType === type}
      id={price}
      value={type}
      onClick={getInput}
      type="button"
    >
      <StyledBoxText>{type}</StyledBoxText>
      <StyledPriceText>R$ {price * 0.01}</StyledPriceText>
    </StyledTicketBox>
  );
}

const StyledTicketBox = styled.button`
  all: unset;
  box-sizing: border-box;
  width: 145px;
  height: 145px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px;
  border: 1px solid #cecece;
  border-radius: 20px;
  cursor: pointer;
  ${(props) => props.select && 'background-color: #ffeed2; border: none;'}
`;

const StyledBoxText = styled.p`
  font-family: 'arial';
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #454545;
  pointer-events: none;
`;

const StyledPriceText = styled.p`
  font-family: 'arial';
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #898989;
  pointer-events: none;
`;
