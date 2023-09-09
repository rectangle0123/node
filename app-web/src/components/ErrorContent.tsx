import { Container, Stack, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledContent = styled('div')(({theme}) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
}));

// エラー画面のコンテンツ
export default function ErrorContent({status, message, explain}: {status: number, message: string, explain: string}) {
  const theme = useTheme();
  return (
    <Container>
      <StyledContent sx={{textAlign: 'center', alignItems: 'center'}}>
        <Stack direction="row">
          <Typography variant='h4' color={theme.palette.error.main}>
            {status}
          </Typography>
          <Typography variant='h4' sx={{ml: 2}}>
            {message}
          </Typography>
        </Stack>
        <Typography color="text.secondary" sx={{m: 1}}>
          {explain}
        </Typography>
      </StyledContent>
    </Container>
  );
}