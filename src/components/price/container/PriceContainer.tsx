import React from "react";
import styled from "styled-components";

import { COLORS, INTL } from "../../../common/constants";
import { PriceElement } from "../ui/molecules/PriceElement";
import { CircleLogoIcon } from "../../../assets/icons";

type TPriceContainerProps = {
  className?: string;
};

export const PriceContainer = ({ className }: TPriceContainerProps) => (
  <WrapperStyle>
  <PriceLayout className={className}>
    <PriceElement
      title={INTL.PRICE_PAGE.FIRST_LESSON.TITLE}
      price={INTL.PRICE_PAGE.FIRST_LESSON.PRICE}
    />
    <PriceElement
      title={INTL.PRICE_PAGE.ONE_LESSON.TITLE}
      price={INTL.PRICE_PAGE.ONE_LESSON.PRICE}
    />
    <PriceElement
      title={INTL.PRICE_PAGE.TICKETS.FOUR_CLASSES.TITLE}
      price={INTL.PRICE_PAGE.TICKETS.FOUR_CLASSES.FULL_PRICE}
      time={INTL.PRICE_PAGE.TICKETS.FOUR_CLASSES.TIME}
      onePrice={INTL.PRICE_PAGE.TICKETS.FOUR_CLASSES.ONE_PRICE}
    />
    <PriceElement
      title={INTL.PRICE_PAGE.TICKETS.SIX_CLASSES.TITLE}
      price={INTL.PRICE_PAGE.TICKETS.SIX_CLASSES.FULL_PRICE}
      time={INTL.PRICE_PAGE.TICKETS.SIX_CLASSES.TIME}
      onePrice={INTL.PRICE_PAGE.TICKETS.SIX_CLASSES.ONE_PRICE}
    />

    <PriceElement
      title={INTL.PRICE_PAGE.TICKETS.EIGHT_CLASSES.TITLE}
      price={INTL.PRICE_PAGE.TICKETS.EIGHT_CLASSES.FULL_PRICE}
      time={INTL.PRICE_PAGE.TICKETS.EIGHT_CLASSES.TIME}
      onePrice={INTL.PRICE_PAGE.TICKETS.EIGHT_CLASSES.ONE_PRICE}
    />
    <PriceElement
      title={INTL.PRICE_PAGE.TICKETS.SIXTEEN_CLASSES.TITLE}
      price={INTL.PRICE_PAGE.TICKETS.SIXTEEN_CLASSES.FULL_PRICE}
      time={INTL.PRICE_PAGE.TICKETS.SIXTEEN_CLASSES.TIME}
      onePrice={INTL.PRICE_PAGE.TICKETS.SIXTEEN_CLASSES.ONE_PRICE}
    />
    <PriceElement
      title={INTL.PRICE_PAGE.TICKETS.UNLIMITED.TITLE}
      price={INTL.PRICE_PAGE.TICKETS.UNLIMITED.FULL_PRICE}
      onePrice={INTL.PRICE_PAGE.TICKETS.UNLIMITED.ONE_PRICE}
    />
  </PriceLayout>
  </WrapperStyle>
);

const WrapperStyle = styled.div`
  height: 100%;
  padding: 8px;
  background-color: ${COLORS.WHITE};
  border: 4px solid ${COLORS.BLACK_1};
  border-radius: 4px;
`;
const PriceLayout = styled.div`
  padding: 24px;
  color: ${COLORS.BLACK_1};
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-radius: 4px;
  border: 2px solid ${COLORS.BLACK_1};
`;
