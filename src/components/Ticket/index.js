import { Box } from '@material-ui/core';
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import * as ticketApi from '../../services/ticketApi';

function Ticket() {
  const [tickets, setTickets] = useState([]);
  const [selected, setSelected] = useState(null);
  const { token } = JSON.parse(localStorage.getItem('userData'));

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      const data = await ticketApi.getTicketInfo(token);
      setTickets(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSelection = (e) => {
    setSelected(e.target.value);
  };

  return (
    <StyledButtonsBox>
      {tickets.map((ticket) => (
        <StyledTicketBox key={ticket.type} value={ticket.type} onClick={handleSelection}>
          <StyledBoxText>{ticket.type}</StyledBoxText>
          <StyledPriceText>R$ {ticket.price * 0.01}</StyledPriceText>
        </StyledTicketBox>
      ))}
    </StyledButtonsBox>
  );
}

export default Ticket;

const StyledButtonsBox = styled(Box)`
  display: flex;
  flex-wrap: nowrap;
  margin-top: 17px;
  gap: 24px;
`;

const StyledTicketBox = styled(Box)`
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
  :hover {
    background-color: #ffffe2;
    border: none;
  }
`;

const StyledBoxText = styled.p`
  font-family: 'arial';
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #454545;
`;

const StyledPriceText = styled.p`
  font-family: 'arial';
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #898989;
`;
