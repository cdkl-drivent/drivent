import styled from 'styled-components';

export default function FormCard({ children, onSubmit }) {
  return (
    <StyledForm component="form" onSubmit={onSubmit}>
      {children}
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
