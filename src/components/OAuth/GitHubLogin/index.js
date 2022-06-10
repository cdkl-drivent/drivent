import { ThemeProvider } from '@material-ui/styles';
import Button from '../../Form/Button';
import { createTheme } from '@material-ui/core/styles';
import { Divider, Typography } from '@material-ui/core';
import styled from 'styled-components';

function GitHubLogin() {
  const theme = createTheme({
    palette: {
      secondary: { main: '#424445' },
    },
  });

  return (
    <>
      <StyledText variant="caption">ou</StyledText>
      <ThemeProvider theme={theme}>
        <Button color="secondary" fullWidth>
          Entrar com GitHub
        </Button>
      </ThemeProvider>
    </>
  );
}

export default GitHubLogin;

const StyledText = styled(Typography)`
  display: flex;
  flex-direction: row;
`;
