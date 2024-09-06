import React from "react";
import { COLORS, INTL } from "../../../../common/constants";

import { RentContainer } from "../../../../components/rent/container/RentContainer";
import { SectionTemplate } from "../../../../common/ui/organisms/SectionTemplate";
import styled from "styled-components";

type TRentPageProps = {
  className?: string;
};
export const Rent = ({ className }: TRentPageProps) => (
    <SectionTemplateStyled className={className} id='rent' title={INTL.RENT_PAGE.TITLE}>
      <RentContainer />
    </SectionTemplateStyled>
  );

  const SectionTemplateStyled = styled(SectionTemplate)`
background: 
		linear-gradient(rgb(2, 2, 2, 0.6), rgb(2, 2, 2, 0.6)), 
		url(${require("../../../../assets/rent1.jpg")});
    background-size: cover;
background-repeat: no-repeat;
background-color: ${COLORS.BLACK_1_ALPHA_30};
height: 100vh;
display: flex;
justify-content: center;
  align-items: center;
  text-align: center;
/* aspect-ratio: 2/1; */
/* height: 100vh; */
`;