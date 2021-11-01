import React from 'react';

import Box from 'components/box';
import Logo from 'components/logo';
import Search from 'components/search';

const Header = (): JSX.Element => {
  return (
    <Box p={10} gridArea={'header'} bg="primary" display={'grid'} gridTemplateColumns={['25% 75%']}>
      <Logo />
      <Search />
    </Box>
  );
};

export default Header;
