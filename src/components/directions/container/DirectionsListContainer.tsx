import React from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";

import { Card } from "../ui/molecules/Card";
import { directionsList } from "../constants/directionsList";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
  
export const DirectionsListContainer = ({className}: {className?: string}) => {
  const navigate = useNavigate();
  return (
    <WrapperStyle className={className} sx={{gridTemplateRows: {xs: `repeat(6, 150px)`, md: `repeat(5, 150px)`}}}
    >
      <Box sx={{gridArea: {xs: '1/1/3/7', md: '1/1/3/5', lg: '1/1/3/4'}}}>
        <Card
          onClick={() => navigate("/strip")}
          pic={directionsList[0].pic}
          title={directionsList[0].title}
        />
      </Box>
      <Box sx={{ gridArea: {xs: '1/7/2/13', md: '1/5/4/9', lg: '3/7/5/13'}}}>
      <Card
          onClick={() => navigate("/dancehall")}
          pic={directionsList[4].pic}
          title={directionsList[4].title}
        />
      </Box>
      <Box sx={{ gridArea: {xs: '2/7/4/13', md: '1/9/3/13', lg: '1/7/3/10'}}}>
      <Card
          onClick={() => navigate("/twerk")}
          pic={directionsList[3].pic}
          title={directionsList[3].title}
        />
      </Box>
       <Box sx={{ gridArea: {xs: '6/1/7/7', md: '4/5/6/9', lg: '1/10/3/13'}}}>
        <Card
          onClick={() => navigate("/lady_style")}
          pic={directionsList[2].pic}
          title={directionsList[2].title}
        />
      </Box>
      <Box sx={{ gridArea: {xs: '3/1/6/7', md: '3/1/6/5', lg: '3/1/5/4'}}}>
        <Card
          onClick={() => navigate("/choreo")}
          pic={directionsList[1].pic}
          title={directionsList[1].title}
        />
      </Box>
      <Box sx={{ gridArea: {xs: '4/7/7/13', md: '3/9/6/13', lg: '1/4/5/7'}}}>
      <Card
          onClick={() => navigate("/stretching")}
          pic={directionsList[5].pic}
          title={directionsList[5].title}
        />

      </Box>
    </WrapperStyle>
  );
};

const WrapperStyle = styled(Box)`
width: 100%;
display: grid;
  position: relative;
  grid-template-columns: repeat(12, 1fr);
  gap: 16px;
  max-width: 1200px;
`;
