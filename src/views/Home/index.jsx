import { CssBaseline, AppBar, Toolbar, Typography, Container } from '@mui/material';
import BooksList from '../../components/BooksList';

import "./styles.module.css";

export default function Home() {
  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">BibleXP</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <BooksList />
      </Container>
    </>
  )
}
