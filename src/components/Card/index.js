import React, { useState } from 'react';
import FormCard from '../FormCard';
import { SCSecondaryText } from '../FormTicket/styled';
import { Button } from '@material-ui/core';
import CardData from '../CardData';
import styled from 'styled-components';

function Card() {
  const [values, setValues] = useState({
    number: '',
    name: '',
    validThru: '',
    cvc: '',
  });

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
    if (e.target.name === 'name') {
      setValues({ ...values, [e.target.name]: e.target.value.toUpperCase() });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    // comunicação com API de pagamento
    // salvar resposta no banco
  }

  return (
    <>
      <SCSecondaryText>Pagamento</SCSecondaryText>

      <FormCard onSubmit={handleSubmit}>
        <CardData values={values} onChange={handleChange}>
          Cartão
        </CardData>
        <StyledButton variant="contained" type="submit">
          FINALIZAR PAGAMENTO
        </StyledButton>
      </FormCard>
    </>
  );
}

export default Card;

const StyledButton = styled(Button)`
  margin-top: 50px;
  cursor: pointer;
`;
