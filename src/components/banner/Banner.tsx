import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../common/constants';
import { Typography } from '@mui/material';

export const Banner = () => (
    <ContainerStyle>
<TypographyStyled variant='h4'>SIARTY DANCE STUDIO • SIARTY DANCE STUDIO • SIARTY DANCE STUDIO • SIARTY DANCE STUDIO • SIARTY DANCE STUDIO • SIARTY DANCE STUDIO • SIARTY DANCE STUDIO • SIARTY DANCE STUDIO • SIARTY DANCE STUDIO • </TypographyStyled>
    </ContainerStyle>
)

const ContainerStyle = styled.div`
display: flex;
width: 100%;
padding: 24px 0;
background-color: ${COLORS.WHITE};
color: ${COLORS.BLACK_1};
overflow: hidden;
`;

const TypographyStyled = styled(Typography)`
animation: marquee 20s linear infinite;
white-space: nowrap;  
@keyframes marquee {
  from { transform: translateX(0%); }
  to { transform: translateX(-50%); }
}
`;
