import React from 'react';

import Footer from 'components/footer';
import Box from 'components/box';

type PublicLayoutProps = {
  children: React.ReactNode;
};

const PublicLayout = ({ children }: PublicLayoutProps): JSX.Element => {
  return (
    <Box
      display="grid"
      gridGap={20}
      gridTemplateColumns="160px auto auto"
      gridTemplateAreas="'header header header' 'sidebar content content' 'footer footer footer'"
      margin={'6px'}>
      {children}
      <Footer />
    </Box>
  );
};

export default PublicLayout;
