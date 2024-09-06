import React from "react";

import styled from "styled-components";
import { ScheduleContainer } from "../../../../components/schedule/container/ScheduleContainer";
import { COLORS, INTL } from "../../../../common/constants";
import { SectionTemplate } from "../../../../common/ui/organisms/SectionTemplate";
import { CircleLogoIcon } from "../../../../assets/icons";

type TSchedulePageProps = {
  className?: string;
};
export const Schedule = ({ className }: TSchedulePageProps) => {
  return (
    <SectionTemplateStyled className={className} id='schedule' title={INTL.SCHEDULE_PAGE.TITLE}>
        <ScheduleContainer />
                      {/* <IconContainer><CircleLogoIcon /></IconContainer> */}
    </SectionTemplateStyled>
  );
};

const SectionTemplateStyled = styled(SectionTemplate)`
position: relative;
  border-radius: 72px 72px 0 0;
`;
const IconContainer = styled.div`
  position: absolute;
  z-index: 1;
  bottom: -45px;
  color: ${COLORS.WHITE};
  animation-name: rotation;
    animation-duration: 15s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    @keyframes rotation {
    0% {
        transform:rotate(0deg);
    }
    100% {
        transform:rotate(360deg);
    }
}
`;
