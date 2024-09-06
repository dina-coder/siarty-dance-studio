import { Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { COLORS, INTL } from "../../../../../common/constants";


export const Main = () => (
    <WrapperStyle>
        <Typography sx={{ typography: { xs: 'h3', sm: 'h2', md: 'h1' } }}>{INTL.DIRECTIONS_PAGE.CHOREO}</Typography>
        </WrapperStyle>
  );

  const WrapperStyle = styled.div`
  width: 100%;
  height: 100vh;
  color: ${COLORS.WHITE};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-image: url(${require("../../../../../assets/Choreo1.webp")});
  background-size: cover;
  background-repeat: no-repeat
 `;

