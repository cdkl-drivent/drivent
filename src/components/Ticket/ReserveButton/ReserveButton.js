import styled from 'styled-components';
import useReserve from '../../../hooks/useReserve';

export default function ReserveButton() {
  const { setReserve } = useReserve();

  return (
    <StyledReserveButton
      onClick={() => {
        setReserve(true);
      }}
    >
      RESERVAR INGRESSO
    </StyledReserveButton>
  );
}

const StyledReserveButton = styled.button`
  height: 37px;
  width: 162px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: #e0e0e0;
  box-shadow: 0px 2px 10px 0px #00000040;
  border: none;
`;
