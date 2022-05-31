import { Box } from '@material-ui/core';
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import * as ticketApi from '../../services/ticketApi';
import useToken from '../../hooks/useToken';
import TicketButton from './TicketButton/TicketButton';

function Ticket({ orderData, setOrderData }) {
  const [tickets, setTickets] = useState([]);
  const token = useToken();

  useEffect(() => {
    loadOrderData();
  }, []);

  async function loadOrderData() {
    try {
      const orderData = await ticketApi.getTicketInfo(token);
      setTickets(orderData);
      console.log(orderData);
    } catch (error) {
      // eslint-disable-next-line
      console.log(error);
    }
  }

  return (
    <>
      <StyledButtonsBox>
        {tickets.map((ticket, i) => (
          <>
            <TicketButton key={i} {...ticket} orderData={orderData} setOrderData={setOrderData} />
          </>
        ))}
      </StyledButtonsBox>
    </>
  );
}

export default Ticket;

const StyledButtonsBox = styled(Box)`
  display: flex;
  flex-wrap: nowrap;
  margin-top: 17px;
  gap: 24px;
`;
