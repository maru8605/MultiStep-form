import React from 'react';
import { useRecoilValue } from 'recoil';
import { Loading } from '../component/loading';
import { Page } from '../component/page';
import { getComments } from '../atoms/responses';
import { Card, CardContent, Typography } from '@mui/material';

const CommentsContent = () => {
  const data = useRecoilValue(getComments);
  return (
    <Page>
      <Typography variant="h4">Comentarios</Typography>
      {data.map((el) => (
        <Card variant="outlined" key={el.id} style={{ margin: '15px 0' }}>
          <CardContent>
            <Typography variant="body2">{el.comment}</Typography>
          </CardContent>
        </Card>
      ))}
    </Page>
  );
};

export const Comments = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <CommentsContent />
    </React.Suspense>
  );
};
