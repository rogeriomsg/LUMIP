
import React, { useState } from 'react';
import { Container, AppBar, Toolbar, Typography, Button } from '@mui/material';
import Sidebar from './componentes/Sidebar';
import MyForm from './componentes/Formulario/CreateDevice/';

const App = ({ toggleTheme }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Meu App
          </Typography>
          <Button color="inherit" onClick={toggleTheme}>
            Alternar Tema
          </Button>
        </Toolbar>
      </AppBar>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Container sx={{ marginTop: 4 }}>
        <Typography variant="h4" gutterBottom>
          Bem-vindo ao Meu App
        </Typography>
        <MyForm />
      </Container>
    </>
  );
};

export default App;

