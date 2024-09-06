import React from 'react';

import { COLORS, INTL } from '../../../../common/constants';
import styled from 'styled-components';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';
import { Link, scroller } from 'react-scroll';
import { useLocation, useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const {pathname} = useLocation()
  const handleClickLink = (id: string)=>{
    if (pathname !=='/') {
      navigate('/');
      setTimeout(()=> {scroller.scrollTo(id, {spy:true})}, 0)
    }
   };
    return (
<ListStyled>
        {navItems.map(({id, title}) => (
          <ListItem key={id} disablePadding>
              <Link key={id} to={id} smooth= {true} spy={true} onClick={() => handleClickLink(id)}>
            <ListItemButton 
            component={'a'} 
            sx={{
                "&.MuiButtonBase-root:hover": {
                  textDecorationColor: COLORS.ACCENT,
                  textDecorationLine: 'underline',
                  textDecorationThickness: '4px',
                  textUnderlineOffset: '6px'
                }}}>
              <Typography noWrap variant="button">{title}</Typography>
            </ListItemButton>
            </Link>
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
