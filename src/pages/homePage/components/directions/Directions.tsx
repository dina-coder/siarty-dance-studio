import React from "react";
import { COLORS, INTL } from "../../../../common/constants";
import { DirectionsListContainer } from "../../../../components/directions/container/DirectionsListContainer";
import { SectionTemplate } from "../../../../common/ui/organisms/SectionTemplate";
import styled from "styled-components";

type TMainProps = {
  className?: string;
};
export const Directions = ({ className }: TMainProps) => {
  return (
    <SectionTemplateStyled isInvert={true} className={className} id='directions' title={INTL.DIRECTIONS_PAGE.TITLE}>
      <LayoutStyle>
        <DirectionsListContainer />
        </LayoutStyle>
    </SectionTemplateStyled>
  );
};

const SectionTemplateStyled = styled(SectionTemplate)`
  border-radius: 0 0 -16px -16px;
  padding: 72px 0 0 0;
`;
const LayoutStyle = styled.div`
display:flex;
justify-content: center;
width: 100%;
  padding: 24px 12px 72px 12px;
  background-image: url(${require("../../../../assets/directionsBg.png")});
background-repeat: repeat;
`;