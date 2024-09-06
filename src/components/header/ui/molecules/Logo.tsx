import { Box } from "@mui/material";
import React from "react";
import styled from "styled-components";

import { LogoIcon } from "../../../../assets/icons";
import { COLORS } from "../../../../common/constants";

type TLogoProps = {
    className?: string;
    onClick: () => unknown;
}

export const Logo = ({className, onClick}: TLogoProps) => (
    <LogoContainerStyled
    className={className}
    onClick={onClick}
  >
    <LogoIconStyled />
  </LogoContainerStyled>
)

const LogoContainerStyled = styled(Box)`
  display: 'flex';
  color: ${COLORS.WHITE};
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const LogoIconStyled = styled(LogoIcon)`
  height: 36px;
  width: 36px;
`;