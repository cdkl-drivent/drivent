import { useEffect, useState } from 'react';
import styled from 'styled-components';
import AlertMessage from '../../../components/AlertMessage';
import Card from '../../../components/Card';
import FormTicket from '../../../components/FormTicket/FormTicket';
import useToken from '../../../hooks/useToken';
import * as enrollmentApi from '../../../services/enrollmentApi';

export default function Payment() {
  const [enrollments, setEnrollments] = useState(null);
  const message = 'Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso';
  const token = useToken();

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      const data = await enrollmentApi.getPersonalInformations(token);
      setEnrollments(data);
    } catch (error) {
      return;
    }
  }

  return (
    <>
      <StyledPageTitle>Ingresso e pagamento</StyledPageTitle>
      {enrollments ? <FormTicket /> : <AlertMessage message={message} />}
    </>
  );
}

/* <Card></Card>; */

const StyledPageTitle = styled.p`
  font-family: 'arial';
  font-weight: 400;
  font-size: 34px;
  line-height: 40px;
  color: #000000;

  margin-bottom: 37px;
`;
