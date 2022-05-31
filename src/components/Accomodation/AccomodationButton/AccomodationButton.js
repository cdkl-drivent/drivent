import styled from 'styled-components';

export default function AccomodationButton({ type, price, orderData, setOrderData }) {
  function getInput(e) {
    e.stopPropagation();
    setOrderData({ ...orderData, accomodationType: e.target.value, accomodationPrice: parseInt(e.target.id) });
  }
  return (
    <StyledAccomodationBox
      key={type}
      select={orderData.accomodationType === type}
      id={price}
      value={type}
      onClick={getInput}
      type="button"
    >
      <StyledBoxText>{type}</StyledBoxText>
      <StyledPriceText>R$ {price * 0.01}</StyledPriceText>
    </StyledAccomodationBox>
  );
}

const StyledAccomodationBox = styled.button`
  all: unset;
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
