import React from 'react';
import { useRecoilValue } from 'recoil';
import { Loading } from '../component/loading';
import { Page } from '../component/page';
import { getFeedback } from '../atoms/responses';
import { Card, CardContent, Typography } from '@mui/material';

const FeedbackContent = () => {
  const data = useRecoilValue(getFeedback);
  return (
    <Page>
      <Typography variant="h4">Quejas</Typography>
      {data.map((el) => (
        <Card variant="outlined" key={el.id} style={{ margin: '15px 0' }}>
          <CardContent>
            <Typography variant="body2">{el.feedback}</Typography>
          </CardContent>
        </Card>
      ))}
    </Page>
  );
};

export const Feedback = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <FeedbackContent />
    </React.Suspense>
  );
};
