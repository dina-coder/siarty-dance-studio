import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants";
import { Typography } from "@mui/material";

type TSectionTemplateProps = {
  className?: string;
  isInvert?: boolean;
  id?: string;
  title?: string;
  children?: React.ReactNode;
};
export const SectionTemplate = ({ className, id, title, children, isInvert=false }: TSectionTemplateProps) => {
  return (
    <MainSectionWrapper className={className} id={id} data-invert={isInvert}>
        {title && <TypographyStyled color={isInvert ? COLORS.BLACK_1 : COLORS.WHITE} sx={{ typography: { xs: 'h4', sm: 'h2' } }} fontWeight={isInvert ? 400 : 200}>{title}</TypographyStyled>}
        {children}
    </MainSectionWrapper>
  );
};

const MainSectionWrapper = styled.section`
display: flex;
flex-direction: column;
align-items: center;
  padding: 72px;
  width: 100%;
  max-width: 1920px;

  &[data-invert='true'] {
    background-color: ${COLORS.WHITE};
  }

  &[data-invert='false'] {
    background-color: ${COLORS.BLACK_1};
  }
`;

const TypographyStyled = styled(Typography)`
  text-align: center;
  font-family: "Montserrat", sans-serif;
  padding: 24px 0 36px 0;
`;
