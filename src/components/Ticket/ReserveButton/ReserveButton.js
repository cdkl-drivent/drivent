import styled from 'styled-components';

export default function ReserveButton() {
  return (
    <StyledReserveButton>
        RESERVAR INGRESSO
    </StyledReserveButton>
  );
};

const StyledReserveButton = styled.button`
  height: 37px;
  width: 162px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: #E0E0E0;
  box-shadow: 0px 2px 10px 0px #00000040;
  border: none;
`;

