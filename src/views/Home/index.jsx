import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  CssBaseline,
  Box,
  Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState('Bíblia');

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleListItemClick = (page) => {
    setSelectedPage(page);
    setDrawerOpen(false);
  };

  const renderContent = () => {
    switch (selectedPage) {
      case 'Bíblia':
        return <Typography variant="h4">Conteúdo da Bíblia</Typography>;
      case 'Clube de Leitura':
        return <Typography variant="h4">Conteúdo do Clube de Leitura</Typography>;
      case 'Testemunhos':
        return <Typography variant="h4">Conteúdo de Testemunhos</Typography>;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={toggleDrawer(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            BibleXP
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: 240,
            backgroundColor: '#333',
            color: '#fff',
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['Bíblia', 'Clube de Leitura', 'Testemunhos'].map((text) => (
              <ListItem
                button
                key={text}
                onClick={() => handleListItemClick(text)}
              >
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, ml: { sm: `240px` } }}
      >
        <Toolbar />
        <Container>{renderContent()}</Container>
      </Box>
    </Box>
  );
}
