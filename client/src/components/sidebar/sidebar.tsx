import React from 'react';
import styled from '@emotion/styled';

import { ChildCategory } from 'types';

import Box from 'components/box';
import SidebarLoading from 'components/sidebar/sidebar.loading';

type SidebarProps = {
  childCategories: ChildCategory[];
  loading?: boolean;
};

const SidebarStyled = styled(Box)`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  ul li {
    margin: 0 0 0 8px;
    padding: 8px 0;
  }
`;

const Sidebar = ({ childCategories, loading = false }: SidebarProps): JSX.Element => {
  return (
    <SidebarStyled gridArea="sidebar" bg="secondary" p={10}>
      <h3>Kategorien</h3>
      {loading ? (
        <SidebarLoading />
      ) : (
        <>
          {childCategories.length === 0 ? (
            <Box color="text" lineHeight={1.5}>
              Sorry! no child categories available.
            </Box>
          ) : (
            <ul>
              {childCategories.map((category) => (
                <li key={category.urlPath}>
                  <a href={`/${category.urlPath}`}>{category.name}</a>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </SidebarStyled>
  );
};

export default Sidebar;
