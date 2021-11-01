import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SidebarLoading = (): JSX.Element => {
  return (
    <Skeleton
      containerTestId="sidebar-skeleton"
      style={{ margin: '8px 0 8px 8px' }}
      count={5}
      width={100}
    />
  );
};

export default SidebarLoading;
