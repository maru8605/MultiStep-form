import { useState } from 'react';
import styled from 'styled-components';
import { useSnackbar } from 'notistack';
import { useHistory } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FirebaseAuth } from '../config/firebase';
import {
  Box,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  FormControl,
  TextField,
  Button,
  IconButton,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import * as UserAtoms from '../atoms/user';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  height: 220px;
`;
const MyBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '60px',
  alignItems: 'center',
  flexWrap: 'nowrap',
});

const MyTextField = styled(TextField)({
  marginBottom: '60px',
});

const MyButton = styled(Button)({
  width: '100%',
  padding: '12px',
});

export const Login = () => {
  const auth = useRecoilValue(UserAtoms.auth);
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onShowPasswordChange = () => {
    setShowPassword(!showPassword);
  };

  if (auth !== null) {
    setTimeout(() => history.push('/'), 0);
    return null;
  }

  const onSend = () => {
    if (email === '' || password === '') {
      return enqueueSnackbar('Se requiere completar todos los campos.', {
        variant: 'error',
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'center',
        },
      });
    }
    signInWithEmailAndPassword(FirebaseAuth, email, password)
      .then((userCredentials) => {
        setTimeout(() => history.push('/'), 0);
      })
      .catch((error) => {
        return enqueueSnackbar('E-mail o Contraseña incorrecta.', {
          variant: 'error',
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'center',
          },
        });
      });
  };

  return (
    <MyBox className="boxcontainer">
      <h2>Iniciar Sesión</h2>
      <InputContainer>
        <MyTextField
          fullWidth
          required
          id="email"
          label="E-Mail"
          onChange={onEmailChange}
        />
        <FormControl fullWidth>
          <InputLabel htmlFor="password" fullWidth>
            Contraseña
          </InputLabel>
          <OutlinedInput
            id="password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={onPasswordChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={onShowPasswordChange}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <MyButton onClick={onSend} color="primary" variant="contained">
          Iniciar sesión
        </MyButton>
      </InputContainer>
    </MyBox>
  );
};
