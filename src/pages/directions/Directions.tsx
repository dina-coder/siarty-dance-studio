import React from "react";
import styled from "styled-components";
import { COLORS, INTL } from "../../common/constants";
import { Button, Typography } from "@mui/material";
import { DirectionsListContainer } from "../../components/directions/container/DirectionsListContainer";

type TMainProps = {
  className?: string;
};
export const DirectionsPage = ({ className }: TMainProps) => {
  return (
    <MainSectionWrapper className={className} id='directions'>
        <TypographyStyled color={COLORS.WHITE} variant='h4' fontWeight={200}>{INTL.DIRECTIONS_PAGE.TITLE}</TypographyStyled>
        <DirectionsListContainer />
    </MainSectionWrapper>
  );
};

const MainSectionWrapper = styled.section`
  padding: 24px;
`;

const TypographyStyled = styled(Typography)`
  text-align: center;
  font-family: "Montserrat", sans-serif;
  padding: 24px 0 36px 0;
`;
