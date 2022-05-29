import Ticket from '../../../components/Ticket';
import styled from 'styled-components';

export default function Payment() {
  return (
    <>
      <StyledPageTitle>Ingresso e pagamento</StyledPageTitle>
      <StyledSecondaryTitle> Primeiro, escolha sua modalidade de ingresso</StyledSecondaryTitle>
      <Ticket></Ticket>
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

const StyledSecondaryTitle = styled.p`
  font-family: 'arial';
  font-size: 20px;
  line-height: 23px;
  color: #8e8e8e;
`;
