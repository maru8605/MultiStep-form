import React, { useState } from 'react';
import styled from 'styled-components';
import { useSnackbar } from 'notistack';
import { useHistory } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { FirebaseAuth } from '../config/firebase';
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  Divider,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from '@mui/material';
import { Link } from './link';
import { useSetRecoilState } from 'recoil';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import FeedIcon from '@mui/icons-material/Feed';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import CommentIcon from '@mui/icons-material/Comment';
import FeedbackIcon from '@mui/icons-material/Feedback';

import * as atoms from '../atoms/form';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  background: rgb(234, 238, 243);
`;

const MenuContent = () => {
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const setPage = useSetRecoilState(atoms.page);
  const setValues = useSetRecoilState(atoms.values);

  const onNewClick = () => {
    setPage(0);
    setValues({});
    setTimeout(() => history.push('/encuesta'), 0);
  };

  const onLogoutClick = () => {
    signOut(FirebaseAuth)
      .then(() => {
        enqueueSnackbar('Se ha cerrado sesión de forma exitosa.', {
          variant: 'success',
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'center',
          },
        });
        setTimeout(() => history.push('/ingreso'), 0);
      })
      .catch(() => {
        enqueueSnackbar(
          'Se ha producido un error en el Servidor, intenta mas tarde.',
          {
            variant: 'error',
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'center',
            },
          }
        );
      });
  };

  return (
    <Box sx={{ width: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          <Link to="/">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Inicio" />
              </ListItemButton>
            </ListItem>
          </Link>
          <ListItem disablePadding onClick={onNewClick}>
            <ListItemButton>
              <ListItemIcon>
                <AddCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Nueva Encuesta" />
            </ListItemButton>
          </ListItem>
          <Link to="/reporte">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <FeedIcon />
                </ListItemIcon>
                <ListItemText primary="Reporte" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/comentarios">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CommentIcon />
                </ListItemIcon>
                <ListItemText primary="Comentarios" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/quejas">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <FeedbackIcon />
                </ListItemIcon>
                <ListItemText primary="Quejas" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
      </nav>
      <Divider />
      <nav>
        <List>
          <ListItem disablePadding onClick={onLogoutClick}>
            <ListItemButton>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Cerrar Sesión" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
};

export const Layout = (props) => {
  const { children } = props;
  const [isOpen, setIsOpen] = useState(false);

  const onMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <Wrapper>
      <Drawer anchor="left" open={isOpen} onClose={onClose}>
        <MenuContent />
      </Drawer>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            onClick={onMenuClick}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Encuesta de satisfacción de usuarias
          </Typography>
        </Toolbar>
      </AppBar>
      <Content>{children}</Content>
    </Wrapper>
  );
};
