import React from 'react';
import styled from 'styled-components';
import CircularProgress from '@mui/material/CircularProgress';

const WrapperLoading = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Loading = () => {
  return (
    <WrapperLoading>
      <CircularProgress />
    </WrapperLoading>
  );
};
