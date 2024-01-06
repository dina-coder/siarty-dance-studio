import React from "react";
import styled from "styled-components";
import {
  Grid
} from "@mui/material";

import { Card } from "../ui/molecules/Card";
import { directionsList } from "../constants/directionsList";

export const DirectionsListContainer = () => {
  return (
    <WrapperStyle container spacing={3}>
      {directionsList.map(({ id, title, pic }) => (
        <GridStyled item key={id} xs={12} sm={6} md={4} lg={3}>
          <Card pic={pic} title={title} />
        </GridStyled>
      ))}
    </WrapperStyle>
  );
};

const WrapperStyle = styled(Grid)`
height: 100%;
  display: flex;
`;

const GridStyled = styled(Grid)`
  display: flex;
  aspect-ratio: 1/1;
`;
