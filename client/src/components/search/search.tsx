import React from 'react';

import Box from 'components/box';

const Search = (): JSX.Element => {
  return (
    <Box textAlign="right">
      <input data-testid="search" name="search" placeholder={'Search'} />
    </Box>
  );
};

export default Search;
