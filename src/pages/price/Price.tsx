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

type TPricePageProps = {
  className?: string;
};
export const PricePage = ({ className }: TPricePageProps) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <MainSectionWrapper className={className} id='price'>
      <TypographyStyled color={COLORS.WHITE} variant="h4" fontWeight={200}>
        {INTL.PRICE_PAGE.TITLE}
      </TypographyStyled>
      <PriceContainer />
      <AccordionStyled
        sx={{ backgroundColor: "transparent", color: COLORS.WHITE, borderRadius: 0 }}
        expanded={isOpen}
        onChange={() => setOpen(!isOpen)}
      >
        <AccordionSummaryStyled>
          <Typography>Правила использования абонемента</Typography>
          <Icon>
            <Add />
          </Icon>
        </AccordionSummaryStyled>
        <AccordionDetails>
          <Typography>
            <MarkdownStyled children={`
1. ЗАПИСЬ
- Если вы записались, но не пришли, а мы забронировали за вами место, то занятие сгорает.
- Отмена возможна за 8 часов до начала занятия, в противном случае, ваше занятие сгорает.
- Если у вас нет абонемента и вы записались на пробное занятие, то администратор попросит внести предоплату.
2. ВОЗВРАТ И ЗАМОРОЗКА
- Услуга заморозки осуществляется по предоставлению справки с надлежащими печатями и на срок лечения.
- Возврат денежных средств за покупку абонемента (любого номинала) осуществляется при полном запрете врача на физическую (танцевальную) деятельность сроком больше трех календарных месяцев.
- Расчет возврата денежных средств осуществляется путем соотношения номинала абонемента, срока действия абонемента
и количество использованных занятий. Дополнительно при
возврате средств удерживается сервисный сбор в размере
1500 рублей.
  `} />
          </Typography>
        </AccordionDetails>
      </AccordionStyled>
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
  border-top: 1px solid white;
  border-bottom: 1px solid white;
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
