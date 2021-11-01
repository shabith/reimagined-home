import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import Box from 'components/box';

const ArticleCardLoading = (): JSX.Element => {
  return (
    <Box p={10} border="1px solid" borderColor="border">
      <Box minHeight="100%" display="flex" style={{ flexDirection: 'column' }}>
        <Skeleton width="100%" height={200} containerTestId="skeleton-name" />
        <Box flex={1} display="inline-block" py="1" my="1" width={[1]}>
          <Skeleton width={150} />
        </Box>
        <Box display="inline-block" py="1" my="1" width={[1]}>
          <Skeleton width={100} />
        </Box>
        <Box>
          <Skeleton width="100%" height={20} />
        </Box>
      </Box>
    </Box>
  );
};

export default ArticleCardLoading;
