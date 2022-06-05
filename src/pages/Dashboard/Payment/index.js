import { useEffect, useState } from 'react';
import styled from 'styled-components';
import FormAccomodation from '../../../components/FormAccomodation/FormAccomodation';
import AlertMessage from '../../../components/AlertMessage';
import Card from '../../../components/Card';
import FormTicket from '../../../components/FormTicket/FormTicket';
import useToken from '../../../hooks/useToken';
import * as enrollmentApi from '../../../services/enrollmentApi';
import useReserve from '../../../hooks/useReserve';
import FinalizePayment from '../../../components/FinalizePayment/FinalizePayment';
import useOrder from '../../../hooks/useOrder';

export default function Payment() {
  const [enrollments, setEnrollments] = useState(null);
  const message = 'Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso';
  const token = useToken();
  const { reserve } = useReserve();
  const { orderData } = useOrder();
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
      {reserve ? (
        <FinalizePayment orderData={orderData} />
      ) : enrollments ? (
        <>
          <FormTicket />
          <FormAccomodation />
        </>
      ) : (
        <AlertMessage message={message} />
      )}
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
