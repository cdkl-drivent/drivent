import styled from 'styled-components';

export default function HotelButton({ hotelData }) {
//   function getInput(e) {
//     if (e.target.value === 'Online') {
//       setOrderData({
//         ...orderData,
//         ticketType: e.target.value,
//         ticketPrice: parseInt(e.target.id),
//         accomodationType: 'Sem Hotel',
//         accomodationPrice: 0,
//       });
//     } else {
//       setOrderData({ ...orderData, ticketType: e.target.value, ticketPrice: parseInt(e.target.id) });
//     }
//   }
  console.log(hotelData);
  return (
    <StyledHotelBox
      key={hotelData.id}

    >
      <StyledImage image={hotelData.image}>
      </StyledImage>
      <StyledName>{hotelData.name}</StyledName>
      <StyledRoomTypes>
        <p>Tipos de acomodação:</p>
        {hotelData.roomTypes}
      </StyledRoomTypes>
    </StyledHotelBox>
    // <StyledTicketBox
    //   key={type}
    //   select={orderData.ticketType === type}
    //   id={price}
    //   value={type}
    //   onClick={getInput}
    //   type="button"
    // >
    //   <StyledBoxText>{type}</StyledBoxText>
    //   <StyledPriceText>R$ {price * 0.01}</StyledPriceText>
    // </StyledTicketBox>
  );
}

const StyledHotelBox = styled.button`
  all: unset;
  box-sizing: border-box;
  width: 196px;
  height: 254px;
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

const StyledImage = styled.img`
    width: 100%;
    height: 50px;
    src: ${(props) => props.image};
`;

const StyledName = styled.p`
    font-size: 20px;
    font-weight: 400;
`;

const StyledRoomTypes = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 19px;
  text-align: center;
  color: #454545;
  pointer-events: none;
  p {
      font-weight: 700;
      
  }
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
