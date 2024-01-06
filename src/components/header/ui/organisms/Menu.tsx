import { List, ListItem, ListItemButton, Typography } from '@mui/material';
import React from 'react';

import { COLORS, INTL } from '../../../../common/constants';
import styled from 'styled-components';

const navItems = [
    {
        id: 'directions',
        title: INTL.HEADER.MENU.STYLES
    }, {
        id: 'schedule',
        title: INTL.HEADER.MENU.SCHEDULE}, {
            id: 'price',
            title: INTL.HEADER.MENU.PRICE}, {
                id: 'rent',
                title: INTL.HEADER.MENU.RENT}, {
                    id: 'contact',
                    title: INTL.HEADER.MENU.CONTACT}]
export const Menu = () => {
    return (
<ListStyled>
        {navItems.map(({id, title}) => (
          <ListItem key={id} disablePadding>
            <ListItemButton 
            component={'a'} href={'#'+id}
            sx={{
                "&.MuiButtonBase-root:hover": {
                  textDecorationColor: COLORS.ACCENT,
                  textDecorationLine: 'underline',
                  textDecorationThickness: '4px',
                  textUnderlineOffset: '6px'
                }}}>
              <Typography noWrap variant="button">{title}</Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </ListStyled>
    )
};

const ListStyled = styled(List)`
  display: flex;
  flex-direction: row;
  color: white;
`;
