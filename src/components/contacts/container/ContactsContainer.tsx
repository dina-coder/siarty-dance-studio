import React from "react";
import styled from "styled-components";

import { ContactsPanel } from "../ui/molecules/ContactsPanel";
import { Box, Button, Typography } from "@mui/material";
import { COLORS, INTL } from "../../../common/constants";


export const ContactsContainer = () => {
  return (
    <WrapperStyle>

<ContactsPanel />


      <IframeContainerStyle>
<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A3da531cef0060c45bacf1fca7b87404433ad6ff9b20db608a83f776d9d903a02&amp;source=constructor" width="100%" height="400" />
</IframeContainerStyle>
{/* <Typography variant="caption" color={COLORS.WHITE}>
    ⓒ Siarty dance studio, 2023
    </Typography> */}
</WrapperStyle>
  );
};

const WrapperStyle = styled.div`
width: 80vw;
display: flex;
justify-content: center;
align-items: center;
padding: 40px 40px;
flex-wrap: wrap;
/* width: 100%; */
  gap: 40px;
  `;

const IframeContainerStyle = styled(Box)`
flex-grow: 1;
  min-width: 320px;
  margin-top: 40px;
`;
const ButtonStyled = styled(Button)`
  margin-top: 16px;
`;