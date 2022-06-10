import styled from 'styled-components';
import useHotel from '../../hooks/useHotel';

export default function HotelButton({ hotelData }) {
  const { hotel, setHotel } = useHotel();
  function selectHotel(e) {
    setHotel(e.target.value);
    console.log(e.target.value);
  }

  return (
    <StyledHotelBox
      key={hotelData.id}
      select={hotelData.id === hotel.id}
      id={hotelData.id}
      value={hotelData.id}
      onClick={selectHotel}
      type="button"
    >
      <StyledImage image={hotelData.image}>
        <img src={hotelData.image}></img>
      </StyledImage>
      <StyledName>{hotelData.name}</StyledName>
      <StyledRoomTypes>
        <p>Tipos de acomodação:</p>
        {hotelData.roomTypes}
      </StyledRoomTypes>
      <StyledBeds>
        <p>Vagas disponíveis:</p>
        {hotelData.availableBeds}
      </StyledBeds>
    </StyledHotelBox>
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
  gap: 10px;
  border: 1px solid #cecece;
  border-radius: 20px;
  cursor: pointer;
  ${(props) => props.select && 'background-color: #ffeed2; border: none;'}
`;

const StyledImage = styled.div`
    width: 168px;
    height: 109px;
    margin-top: 0px;
    img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }
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

const StyledBeds = styled.div`
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
