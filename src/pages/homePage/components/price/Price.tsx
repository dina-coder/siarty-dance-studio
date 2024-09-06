import React, { useState } from "react";
import styled from "styled-components";
import { COLORS, INTL } from "../../../../common/constants";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Icon,
  Typography,
} from "@mui/material";
import { PriceContainer } from "../../../../components/price/container/PriceContainer";
import Add from "@mui/icons-material/Add";
import { SectionTemplate } from "../../../../common/ui/organisms/SectionTemplate";

type TPricePageProps = {
  className?: string;
};
export const Price = ({ className }: TPricePageProps) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <SectionTemplateStyled className={className} id='price' title={INTL.PRICE_PAGE.TITLE}>
      <BlurStyle>
      <LayoutStyle>
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
          <Typography dangerouslySetInnerHTML={{__html:`
1. ЗАПИСЬ<br />
- Если вы записались, но не пришли, а мы забронировали за вами место, то занятие сгорает.<br />
- Отмена возможна за 8 часов до начала занятия, в противном случае, ваше занятие сгорает.<br />
- Если у вас нет абонемента и вы записались на пробное занятие, то администратор попросит внести предоплату.<br />
2. ВОЗВРАТ И ЗАМОРОЗКА<br />
- Услуга заморозки осуществляется по предоставлению справки с надлежащими печатями и на срок лечения.<br />
- Возврат денежных средств за покупку абонемента (любого номинала) осуществляется при полном запрете врача на физическую (танцевальную) деятельность сроком больше трех календарных месяцев.<br />
- Расчет возврата денежных средств осуществляется путем соотношения номинала абонемента, срока действия абонемента<br />
и количество использованных занятий. Дополнительно при
возврате средств удерживается сервисный сбор в размере
1500 рублей.
  `}} />
        </AccordionDetails>
      </AccordionStyled>
      </LayoutStyle>
      </BlurStyle>
      </SectionTemplateStyled>
  );
};

const AccordionStyled = styled(Accordion)`
  margin-top: 16px;
  background-color: transparent;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
`;


const AccordionSummaryStyled = styled(AccordionSummary)`
& > div {
  gap: 8px;
}
`;
const LayoutStyle = styled.div`
  max-width: 600px;
`;

const SectionTemplateStyled = styled(SectionTemplate)`
position: relative;
background-image: url(${require("../../../../assets/pricebg.png")});
background-size: 100%;
background-repeat: repeat;
padding: 72px 0;
background-color: ${COLORS.BLACK_1_ALPHA_80};
`;

const BlurStyle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
/* backdrop-filter: blur(6px); */
`;
