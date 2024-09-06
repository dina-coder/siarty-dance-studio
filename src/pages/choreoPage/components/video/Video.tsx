import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { COLORS } from "../../../../common/constants";
import { CircleLogoIcon } from "../../../../assets/icons";


export const Video = () => (
    <GridStyled container sx={{ padding: {xs: '18px 25px', md: '40px 50px'}}} spacing={2} alignItems={"flex-end"}>
        <Grid item md={4} sx={{position: 'relative', display: {xs: 'none', md: 'flex'}}}>
        <TypographyStyled variant='h2'>Катя</TypographyStyled>
                      <IconContainer><CircleLogoIcon /></IconContainer>
       </Grid>
        <Grid item xs={12} md={8} sx={{aspectRatio: '2/1'}}>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/w2pYYxj4ndw?si=Ytn0KpCz2Lu1YoB9" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen loading="lazy" />
        </Grid>
        </GridStyled>
  );
const GridStyled = styled(Grid)`
position: relative;
color: ${COLORS.WHITE};
    background-color: ${COLORS.BLACK_1};
    border-bottom: 1px solid ${COLORS.WHITE};
`;

const IconContainer = styled.div`
  position: absolute;
  /* z-index: 1; */
  right: 40px;
  bottom: 0px;
  color: ${COLORS.WHITE};
  animation-name: rotation;
    animation-duration: 15s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    @keyframes rotation {
    0% {
        transform:rotate(0deg);
    }
    100% {
        transform:rotate(360deg);
    }
}
`;

const TypographyStyled = styled(Typography)`
position: absolute;
right: 120px;
bottom: 45px;
transform: rotate(-90deg);
`;