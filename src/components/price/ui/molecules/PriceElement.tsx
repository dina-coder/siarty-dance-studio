import { Box, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { COLORS } from "../../../../common/constants";

type TScheduleCellProps = {
  className?: string;
  title: string;
  price: string;
  onePrice?: string;
  time?: string;
};

export const PriceElement = ({
  className,
  title,
  price,
  onePrice,
  time,
}: TScheduleCellProps) => (
  <WrapperStyle
    className={className}
    sx={{
      height: { xs: "180px", md: "250px" },
      width: { xs: "180px", md: "250px" },
      padding: { xs: "20px", md: "40px" },
    }}
  >
    <Typography
      component="div"
      sx={{
        fontSize: { md: "1rem", xs: "0.875rem" },
        lineHeight: { md: "1.5", xs: "1.57" },
        fontWeight: 600
      }}
    >
      {title}
    </Typography>
    <Typography
      component="div"
      sx={{ typography: {xs: 'caption', md: 'body2'}}}
    >
      {time}
    </Typography>
    <TypographyStyled
      component="div"
      sx={{
        fontSize: { md: "1rem", xs: "0.875rem" },
        lineHeight: { md: "1.5", xs: "1.57" },
        fontWeight: 600,
      }}
      color={COLORS.ACCENT}
    >
      {price}
    </TypographyStyled>
    <Typography
      component="div"
      sx={{ typography: {xs: 'caption', md: 'body2'}}}
    >
      {onePrice}
    </Typography>
    <ImgContainerStyle
      sx={{
        height: { xs: "180px", md: "250px" },
        width: { xs: "180px", md: "250px" },
      }}
    >
      <img src={require("../../../../assets/price.svg")} />
    </ImgContainerStyle>
  </WrapperStyle>
);

const WrapperStyle = styled(Box)`
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  text-align: center;
  backdrop-filter: blur(6px);

  &:nth-child(even) {
  margin-top: 50px;
}
`;

const ImgContainerStyle = styled(Box)`
  position: absolute;
  display: flex;
  left: 0;
  top: 0;
`;

const TypographyStyled = styled(Typography)`
padding-top: 8px;
`;
