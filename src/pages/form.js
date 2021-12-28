import React, { useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { useSnackbar } from 'notistack';
import { useHistory } from 'react-router-dom';
import { Page } from '../component/page';
import { Button, Typography } from '@mui/material';
import { useRecoilState, useRecoilValue } from 'recoil';
import { setDoc, doc } from '@firebase/firestore';
import { FirebaseDB } from '../config/firebase';
import { pages } from '../data/form';
import { Input } from '../component/input';

import * as atoms from '../atoms/form';

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 70%;
  margin: 0 15%;
`;

const MyButton = styled(Button)({
  width: '130px',
});

export const Form = () => {
  const [page, setPage] = useRecoilState(atoms.page);
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const allValuesObj = useRecoilValue(atoms.allValuesObj);
  const allValuesObjSend = useRecoilValue(atoms.allValuesObjSend);
  const [disableSend, setDisableSend] = useState(false);

  const questions = pages[page];

  const onBackClick = () => {
    if (page >= 1) {
      setPage(page - 1);
    }
  };

  const onNextClick = () => {
    const valid = !questions.some((question) => {
      if (question.optional) {
        return false;
      }
      if (question.requiredBy) {
        const reportValue = allValuesObj[question.requiredBy].value;
        if (!question.requiredByValue.includes(reportValue)) {
          return false;
        }
      }
      return allValuesObj[question.id].value === undefined;
    });

    if (!valid) {
      enqueueSnackbar('Se requiere completar todos los campos.', {
        variant: 'error',
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'center',
        },
      });
      return;
    }
    if (page < pages.length - 1) {
      setPage(page + 1);
    }
  };
  // Envia la info a firebase
  const onSend = async () => {
    setDisableSend(true);
    const id = uuidv4();
    await setDoc(doc(FirebaseDB, 'responses', id), allValuesObjSend);
    enqueueSnackbar(
      'La encuesta se ha completado con éxito. Muchas gracias por su tiempo.',
      {
        variant: 'success',
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'center',
        },
      }
    );
    setTimeout(() => history.push('/'), 0);
  };

  const onExitClick = () => {
    setTimeout(() => history.push('/'), 0);
  };

  return (
    <Page>
      {questions.map((question) => (
        <React.Fragment key={question.id}>
          {question.header && (
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              style={{ textAlign: 'center' }}
            >
              {question.header}
            </Typography>
          )}
          <Input question={question} />
        </React.Fragment>
      ))}
      <ButtonContainer>
        {page === 0 && (
          <MyButton variant="outlined" onClick={onExitClick}>
            Salir
          </MyButton>
        )}
        {page !== pages.length && page !== 0 && (
          <MyButton variant="outlined" onClick={onBackClick}>
            Atras
          </MyButton>
        )}
        {page !== pages.length - 1 && (
          <MyButton onClick={onNextClick} color="primary" variant="contained">
            Siguiente
          </MyButton>
        )}
        {page === pages.length - 1 && (
          <MyButton
            onClick={onSend}
            color="primary"
            variant="contained"
            disabled={disableSend}
          >
            Finalizar
          </MyButton>
        )}
      </ButtonContainer>
    </Page>
  );
};
