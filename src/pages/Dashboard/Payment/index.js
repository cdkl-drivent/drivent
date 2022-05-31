import styled from 'styled-components';
import FormTicket from '../../../components/FormTicket/FormTicket';

export default function Payment() {
  return (
    <>
      <StyledPageTitle>Ingresso e pagamento</StyledPageTitle>
      <FormTicket />
    </>
  );
}

const StyledPageTitle = styled.p`
  font-family: 'arial';
  font-weight: 400;
  font-size: 34px;
  line-height: 40px;
  color: #000000;

  margin-bottom: 37px;
`;
