import React from "react";
import styled from "styled-components";
import { COLORS, INTL } from "../../../../common/constants";
import {  Typography } from "@mui/material";
import { SectionTemplate } from "../../../../common/ui/organisms/SectionTemplate";

export const AboutUs = () => (
  <SectionTemplateStyled>
    <TypographyStyled variant="h5">
      Танцевальная студия для детей и взрослых в шаговой доступности от
      м. Академическая. Мы проводим как груповые, так и индивидуальные занятия
      по направлениям Twerk, High Heels, Frame up Strip, Hip-hop, Dancehall,
      Choreography
    </TypographyStyled>
  </SectionTemplateStyled>
);

const SectionTemplateStyled = styled(SectionTemplate)`
align-items: normal;
gap: 24px;
`;


const TypographyStyled = styled(Typography)`
  color: ${COLORS.WHITE};
  text-align: center;
`;
