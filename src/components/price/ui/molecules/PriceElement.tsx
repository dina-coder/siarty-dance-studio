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
  <WrapperStyle className={className}>
    <div>
      <Typography component="div" variant="body1">{title}</Typography>
      <Typography component="div" variant="caption">{time}</Typography>
    </div>
    {onePrice ? <TypographyStyled variant="body1">
      {price}{' / занятие – '}{onePrice}
    </TypographyStyled> : <TypographyStyled variant="body1">
      {price}
    </TypographyStyled>}
  </WrapperStyle>
);

const WrapperStyle = styled(Box)`
  display: flex;
  justify-content: space-between;
  gap: 16px;

`;

const TypographyStyled = styled(Typography)`
  text-align: right;
`