import React from 'react';
import styled from 'styled-components';
import Paper from '@mui/material/Paper';

const PageWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-height: 100%;
  padding: 30px;

  & > div {
    padding: 30px;
  }
`;

export const Page = (props) => {
  const { children } = props;

  return (
    <PageWrapper>
      <Paper elevation={2}>{children}</Paper>
    </PageWrapper>
  );
};
