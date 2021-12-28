import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Button } from '@mui/material';
import { useSetRecoilState } from 'recoil';

import * as atoms from '../atoms/form';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MyButton = styled(Button)`
  background-color: #5cb85c !important;
  display: block;
  padding: 30px 60px !important;
  text-decoration: none;
  font-size: 48px !important;
  text-transform: none !important;
`;

export const Home = () => {
  const history = useHistory();
  const setValues = useSetRecoilState(atoms.values);
  const setPage = useSetRecoilState(atoms.page);

  const onNewClick = () => {
    setPage(0);
    setValues({});
    setTimeout(() => history.push('/encuesta'), 0);
  };

  return (
    <Wrapper>
      <MyButton color="primary" variant="contained" onClick={onNewClick}>
        Nueva encuesta
      </MyButton>
    </Wrapper>
  );
};
