import React from "react";
import styled from "styled-components";
import { COLORS, INTL } from "../../common/constants";
import { Typography } from "@mui/material";
import { ScheduleContainer } from "../../components/schedule/container/ScheduleContainer";

type TSchedulePageProps = {
  className?: string;
};
export const SchedulePage = ({ className }: TSchedulePageProps) => {
  return (
    <MainSectionWrapper className={className} id='schedule'>
        <TypographyStyled color={COLORS.WHITE} variant='h4' fontWeight={200}>{INTL.SCHEDULE_PAGE.TITLE}</TypographyStyled>
        <ScheduleContainer />
    </MainSectionWrapper>
  );
};

const MainSectionWrapper = styled.section`
  padding: 24px 72px;
`;

const TypographyStyled = styled(Typography)`
  text-align: center;
  font-family: "Montserrat", sans-serif;
  padding: 24px 0 36px 0;
`;
