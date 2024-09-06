import {
  Typography
} from "@mui/material";
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../../../common/constants";

type TSchedule = {
  id: string;
  title: string;
  time: string;
};

type TScheduleCellProps = {
  className?: string;
  title?: string;
  weekDay: string;
  schedule: TSchedule[];
};

export const ScheduleCell = ({
  className,
  schedule,
  weekDay,
}: TScheduleCellProps) => (
  <WrapperStyle className={className}>
    <TypographyStyled color={COLORS.WHITE}>{weekDay}</TypographyStyled>
    <ContentStyled>
      {schedule.map(({ id, title, time }) => (
        <RowStyle key={id}>
          <Typography color={COLORS.WHITE}>{title}</Typography>
          <Typography color={COLORS.WHITE}>{time}</Typography>
        </RowStyle>
      ))}
    </ContentStyled>
  </WrapperStyle>
);

const WrapperStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${COLORS.BLACK_1};
`;

const TypographyStyled = styled(Typography)`
  padding: 4px 16px 4px 0;
  width: 100%;
  text-align: right;
`;

const ContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 16px;
  gap: 4px;
  font-family: "Montserrat", sans-serif;
  border-top: 1px solid ${COLORS.WHITE};
  height: 100%;
  color: ${COLORS.WHITE};
`;

const RowStyle = styled.div`
  display: flex;
  gap: 8px;
  justify-content: space-between;
`;
