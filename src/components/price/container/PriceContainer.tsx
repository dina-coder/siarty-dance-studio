import React from "react";
import styled from "styled-components";

import { COLORS, INTL } from "../../../common/constants";
import { PriceElement } from "../ui/molecules/PriceElement";

type TPriceContainerProps = {
  className?: string;
};

export const PriceContainer = ({ className }: TPriceContainerProps) => (
  <PriceLayout className={className}>
      <PriceLayout>

    <PriceElement title={INTL.PRICE_PAGE.ONE_LESSON.TITLE} price={INTL.PRICE_PAGE.ONE_LESSON.PRICE} />
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
      </PriceLayout>
          <PriceLayout>

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

  </PriceLayout>
);

const PriceLayout = styled.div`
  color: ${COLORS.WHITE};
  justify-content: center;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
`;
