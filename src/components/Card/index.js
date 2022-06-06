import React, { useEffect, useState } from 'react';
import FormCard from '../FormCard';
import { SCSecondaryText } from '../FormTicket/styled';
import useToken from '../../hooks/useToken';
import * as orderApi from '../../services/orderApi';
import CardData from './CardData';
import FinalizeButtons from '../FinalizeButtons/FinalizeButtons';

function Card() {
  const token = useToken();
  const [order, setOrder] = useState();
  const [values, setValues] = useState({
    number: '',
    name: '',
    validThru: '',
    cvc: '',
  });

  useEffect(() => {
    //carregar info da order
    setOrder({
      payment: false,
    });
  }, []);

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
    if (e.target.name === 'name') {
      setValues({ ...values, [e.target.name]: e.target.value.toUpperCase() });
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // comunicação com API de pagamento
    try {
      await orderApi.updateOrderPayment(token);
    } catch (e) {
      // eslint-disable-next-line
      console.log(e);
    }
  }

  return (
    <div>
      <SCSecondaryText>Pagamento</SCSecondaryText>

      <FormCard onSubmit={handleSubmit}>
        <CardData values={values} onChange={handleChange}>
          Cartão
        </CardData>
        <FinalizeButtons />
      </FormCard>
    </div>
  );
}

export default Card;
