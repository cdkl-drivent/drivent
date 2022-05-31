import { Box } from '@material-ui/core';
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import * as accomodationApi from '../../services/accomodationApi';
import useToken from '../../hooks/useToken';
import AccomodationButton from './AccomodationButton/AccomodationButton';

function Accomodation({ orderData, setOrderData }) {
  const [accomodations, setAccomodations] = useState([]);
  const token = useToken();

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      const data = await accomodationApi.getAccomodationInfo(token);
      setAccomodations(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <StyledButtonsBox>
      {accomodations.map((accomodation, i) => (
        <AccomodationButton key={i} {...accomodation} orderData={orderData} setOrderData={setOrderData} />
      ))}
    </StyledButtonsBox>
  );
}

export default Accomodation;

const StyledButtonsBox = styled(Box)`
  display: flex;
  flex-wrap: nowrap;
  margin-top: 17px;
  gap: 24px;
`;
