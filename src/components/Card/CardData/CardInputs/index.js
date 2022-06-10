import { Box } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import Input from '../../../Form/Input';
import { InputWrapper } from '../../../PersonalInformationForm/InputWrapper';

function CardInputs({ values, onChange }) {
  function handleDate(e) {
    if (e.target.value.split('/')[0] <= 12) {
      onChange(e);
    }
  }
  return (
    <StyledBox>
      <InputWrapper>
        <Input
          helperText="E.g: 49..., 51..., 36..., 37..."
          label="Card Number"
          name="number"
          type="text"
          maxLength="16"
          mask="9999 9999 9999 9999"
          value={values.number || ''}
          onChange={onChange}
        />
      </InputWrapper>
      <InputWrapper>
        <Input label="Name" name="name" type="text" maxLength="20" value={values.name || ''} onChange={onChange} />
      </InputWrapper>
      <SmallInputWrapper>
        <Input
          label="Valid Thru"
          name="validThru"
          mask="99/99"
          maxLength="4"
          value={values.validThru || ''}
          onChange={handleDate}
        />
        <Input
          label="CVC"
          name="cvc"
          type="text"
          maxLength="3"
          mask="999"
          value={values.cvc || ''}
          onChange={onChange}
        />
      </SmallInputWrapper>
    </StyledBox>
  );
}

export default CardInputs;

const StyledBox = styled(Box)`
  gap: 2px;
  display: flex;
  width: 45%;
  flex-wrap: wrap;
  > div {
    width: 100%;
  }

  @media (max-width: 870px) {
    width: 100%;
  }
`;

const SmallInputWrapper = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  > :first-child {
    width: 68%;
  }
  > div {
    width: 28%;
  }
`;
