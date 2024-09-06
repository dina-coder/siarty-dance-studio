import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Icon,
  Typography,
} from "@mui/material";
import styled from "styled-components";
import { Add } from "@mui/icons-material";
import { COLORS } from "../../constants";

type TPageTemplateProps = {
  title: string;
  description: string;
  groupLevel?: string;
  wear?: string;
  schedule: React.ReactNode;
}
export const PageTemplate = ({title, description, groupLevel, wear, schedule}: TPageTemplateProps) => (
  <ContainerStyled>
    <LayoutStyled>
    <TypographyStyled variant="h3" sx={{ mb: "16px" }}>
      {title}
    </TypographyStyled>
    <Typography variant="body1" sx={{ mb: "16px", lineHeight: 1.6 }}>{description}
    </Typography>
    {groupLevel && (<AccordionStyled
      sx={{ backgroundColor: COLORS.BLACK_1, color: COLORS.WHITE }}
    >
      <AccordionSummary expandIcon={<Add sx={{ color: COLORS.WHITE }} />}>
        <Typography>На какой уровень рассчитаны занятия?</Typography>
      </AccordionSummary>
     <AccordionDetails>
        <Typography>
        {groupLevel}
        </Typography>
      </AccordionDetails>
    </AccordionStyled>)}
    {wear && (<AccordionStyled
      sx={{ backgroundColor: COLORS.BLACK_1, color: COLORS.WHITE }}
    >
      <AccordionSummary expandIcon={<Add sx={{ color: COLORS.WHITE }} />}>
        <Typography>Что надеть?</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{wear}</Typography>
      </AccordionDetails>
    </AccordionStyled>)}
    <AccordionStyled
      sx={{ backgroundColor: COLORS.BLACK_1, color: COLORS.WHITE }}
    >
      <AccordionSummary expandIcon={<Add sx={{ color: COLORS.WHITE }} />}>
        <Typography>Расписание</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {schedule}
      </AccordionDetails>
    </AccordionStyled>
    </LayoutStyled>
  </ContainerStyled>
);

const ContainerStyled = styled.section`
display: flex;
flex-direction: column;
align-items: center;
  padding: 72px;
  width: 100%;
  color: ${COLORS.WHITE};
  background-color: ${COLORS.BLACK_1};
`;
const LayoutStyled = styled(Box)`
  position: relative;
  max-width: 1920px;
  border-bottom: 1px solid ${COLORS.WHITE};
`;

const TypographyStyled = styled(Typography)`
  margin-bottom: 72px;
`;

const AccordionStyled = styled(Accordion)`
  color: ${COLORS.WHITE};
  border-bottom: 1px solid white;
`;