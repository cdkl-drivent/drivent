import { Box } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import CardInputs from '../CardInputs';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

function CardData({ values, onChange }) {
  return (
    <StyledBox>
      <CardBox id="Payment">
        <Cards number={values.number} name={values.name} expiry={values.validThru} cvc={values.cvc} />
      </CardBox>
      <CardInputs values={values} onChange={onChange}></CardInputs>
    </StyledBox>
  );
}

export default CardData;

const StyledBox = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 45px;
  column-gap: 35px;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 25px;
  }
`;

const CardBox = styled.div`
  @media (max-width: 750px) {
    display: none;
  }
  @media (max-width: 600px) {
    display: flex;
  }
`;
