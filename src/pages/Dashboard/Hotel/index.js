import styled from 'styled-components';
import { useEffect, useState } from 'react';
import useToken from '../../../hooks/useToken';
import * as hotelApi from '../../../services/hotelApi';
import HotelButton from '../../../components/Hotel/index';

export default function Hotel() {
  const [hotels, setHotels] = useState([]);
  const token = useToken();

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      const data = await hotelApi.getHotels(token);
      setHotels(data);
      console.log(data);
    } catch (error) {
      return;
    }
  }
  return (
    <>
      <StyledPageTitle>Escolha de quarto e hotel</StyledPageTitle>
      <SCSecondaryText>Primeiro, escolha sua modalidade de ingresso</SCSecondaryText>
      <Container>
        {hotels.map((hotel) => (
          <HotelButton hotelData={hotel}></HotelButton>))}
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  flex-wrap: wrap;
`;

const StyledPageTitle = styled.p`
  font-family: 'arial';
  font-weight: 400;
  font-size: 34px;
  line-height: 40px;
  color: #000000;

  margin-bottom: 37px;
`;

const SCSecondaryText = styled.p`
  font-family: 'arial';
  font-size: 20px;
  line-height: 23px;
  color: #8e8e8e;
`;
