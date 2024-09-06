import Grid from "@mui/material/Grid";
import React from "react";
import styled from "styled-components";
import { scheduleList } from "../constants/schedule";
import { COLORS } from "../../../common/constants";
import { ScheduleCell } from "../ui/molecules/ScheduleCell";

export const ScheduleContainer = () => {
  return (
    <WrapperStyle container sx={{backgroundColor: COLORS.WHITE}} spacing={0.1}>
      {scheduleList.map(({ weekDay, schedule}) => (
        <GridStyled item key={weekDay} xs={12} lg={2.4}>
          <ScheduleCell weekDay={weekDay} schedule={schedule}></ScheduleCell>
        </GridStyled>
      ))}
    </WrapperStyle>
  );
};

const WrapperStyle = styled(Grid)`
height: 100%;
display: flex;
padding: 0 1px 1px 0;
`;

const GridStyled = styled(Grid)`
  display: flex;
`;
