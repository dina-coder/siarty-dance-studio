import {
  Typography,
} from "@mui/material";
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../../../common/constants";

type TCardProps = {
  className?: string;
  title?: string;
  pic?: string;
  onClick?: ()=>unknown;
};

export const Card = ({ className, title, pic, onClick }: TCardProps) => (
  <CardStyle
  className={className}
  onClick={onClick}
  pic={pic}
>
      <CardContentStyled>
        <Typography
        variant='h5'
          color={COLORS.WHITE}
          fontFamily={"Montserrat"}
          fontWeight={200}
          sx={{fontWeight: '600'}}
        >
          {title}
        </Typography>
      </CardContentStyled>
  </CardStyle>
);

const CardStyle = styled.div<TCardProps>`
content: '';
height: 100%;
width: 100%;
position: relative;
background-size: cover;
background-position: center;
background-image: ${({pic}) => `url(${pic})`};
border-radius: 16px;

  &:hover {
    transition: all ease-in-out .45s;
    transform: scale(1.05);
    cursor: pointer;
  }
`;


const TypographyStyled = styled(Typography)`
  text-align: center;
`;

const CardContentStyled = styled.div`
position: absolute;
left: 5%;
bottom: 5%;
`;