import React from 'react';

import Box from 'components/box';

const Footer = (): JSX.Element => {
  return (
    <Box p={10} gridArea="footer" bg="primary" textAlign="center">
      Alle Preise sind in Euro (€) inkl. gesetzlicher Umsatzsteuer und Versandkosten.
    </Box>
  );
};

export default Footer;
