import React, { useState } from "react";
import styled from "styled-components";
import { COLORS, INTL } from "../../common/constants";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Icon,
  Typography,
} from "@mui/material";
import { PriceContainer } from "../../components/price/container/PriceContainer";
import Add from "@mui/icons-material/Add";
import Markdown from "react-markdown";
import { RentContainer } from "../../components/rent/container/RentContainer";

type TRentPageProps = {
  className?: string;
};
export const RentPage = ({ className }: TRentPageProps) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <MainSectionWrapper className={className} id='rent'>
      <TypographyStyled color={COLORS.WHITE} variant="h4" fontWeight={200}>
        {INTL.RENT_PAGE.TITLE}
      </TypographyStyled>
      <RentContainer />
    </MainSectionWrapper>
  );
};

const MainSectionWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 16px 0 16px;
  background-color: ${COLORS.BLACK_1};
  /* background-image: url(${require("../../assets/pricebg.png")}); */
  background-size: 100%;
  background-repeat: repeat;
`;

const TypographyStyled = styled(Typography)`
  text-align: center;
  font-family: "Montserrat", sans-serif;
  padding: 24px 0 54px 0;
`;

const AccordionStyled = styled(Accordion)`
  margin-top: 16px;
  background-color: transparent;
`;

const MarkdownStyled = styled(Markdown)`
  & > * {
    all: revert;
  }
`;


const AccordionSummaryStyled = styled(AccordionSummary)`
& > div {
  gap: 8px;
}
`;
