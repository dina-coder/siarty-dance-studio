import {
  Box,
  CardMedia,
  CardMediaTypeMap,
  Card as CardAtom,
  CardActionArea,
  CardContent,
  Typography,
  CardHeader,
} from "@mui/material";
import React from "react";
import styled from "styled-components";

import { LogoIcon } from "../../../../assets/icons";
import { COLORS } from "../../../../common/constants";

type TCardProps = {
  className?: string;
  title?: string;
  pic?: string;
};

export const Card = ({ className, title, pic }: TCardProps) => (
  <CardAtomStyled sx={{
    boxShadow: 'none',
    "&.MuiCard-root": {
      backgroundColor: 'transparent'
    },
    "&.MuiCard-root:hover": {
        backgroundColor: COLORS.ACCENT
      },
  }}>
    <CardActionAreaStyled>
      <CardMediaStyled
        className={className}
        image={pic}
        component="img"
      />
      <CardContentStyled>
        <TypographyStyled
          variant="h6"
          component={"div"}
          color={COLORS.WHITE}
          fontFamily={"Montserrat"}
        >
          {title}
        </TypographyStyled>
      </CardContentStyled>
    </CardActionAreaStyled>
  </CardAtomStyled>
);

const CardMediaStyled = styled(CardMedia)`
  height: 80%;
`;

const CardAtomStyled = styled(CardAtom)`
  position: relative;
  flex-grow: 1;
  &:hover {
    ${CardMediaStyled} {
        transition: all ease-in-out .45s;
        transform: scale(0.9);
    }
  }
`;

const CardActionAreaStyled = styled(CardActionArea)`
  height: 100%;
  padding: 0;
`;



const TypographyStyled = styled(Typography)`
  text-align: center;
`;

const CardContentStyled = styled(CardContent)`
`;
