import { Box } from "@mui/material";
import React from "react";
import styled from "styled-components";

import { LogoIcon } from "../../../../assets/icons";
import { COLORS } from "../../../../common/constants";

type TLogoProps = {
    className?: string;
} & React.HTMLProps<HTMLAnchorElement>

export const Logo = ({className}: TLogoProps) => (
    <LogoContainerStyled
    className={className}
    component="a"
    href="#main"
  >
    <LogoIconStyled />
  </LogoContainerStyled>
)

const LogoContainerStyled = styled(Box)`
  display: 'flex';
  color: ${COLORS.WHITE};
`;

const LogoIconStyled = styled(LogoIcon)`
  height: 42px;
  width: 42px;
`;