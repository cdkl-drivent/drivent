import { Box } from '@material-ui/core';
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import * as ticketApi from '../../services/ticketApi';
import useToken from '../../hooks/useToken';
import TicketButton from './TicketButton/TicketButton';
import TicketSummary from './TicketSummary/TicketSummary';

function Ticket({ data, setData }) {
  const [tickets, setTickets] = useState([]);
  const token = useToken();

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      const data = await ticketApi.getTicketInfo(token);
      setTickets(data);
      console.log(data);
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
            <TicketButton key={i} {...ticket} data={data} setData={setData} />
            
          </>
        ))}
      </StyledButtonsBox>
      {data.ticketType === 'Online' &&
        <TicketSummary data={data}/> 
      }
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
