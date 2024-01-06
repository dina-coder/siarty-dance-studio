import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { ResetStyle } from "./reset";
import { HeaderContainer } from "./components/header/container/HeaderContainer";
import { COLORS } from "./common/constants";
import { ThemeProvider } from "@mui/material";
import { theme } from "./common/constants/theme";
import { MainPage } from "./pages/main/Main";
import { DirectionsPage } from "./pages/directions/Directions";
import { PricePage } from "./pages/price/Price";
import { SchedulePage } from "./pages/schedule/Schedule";
import { ContactsPage } from "./pages/contacts/Contacts";
import { RentPage } from "./pages/rent/Rent";
import { TypographyStyle } from "./typography";

export const App = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isColor, setColor] = useState(false)
  //ref.current?.scrollTop>0 && setColor(true)}
  const handleScrolll = () => {
    ref.current?.scrollTop>10 ? setColor(true) : setColor(false)
  }
  return (
    <>
      <ResetStyle />
      <TypographyStyle />
      <ThemeProvider theme={theme}>
      <ContainerStyle ref={ref} onScroll={handleScrolll}>
        <LayoutStyle>
        <HeaderContainer isColor={isColor} />
        <MainPage />
        <WrapperStyle>
        <DirectionsPage />
        </WrapperStyle>

        <WrapperStyle>

        <SchedulePage />
        </WrapperStyle>

        <PricePage />
        {/* <WrapperStyle> */}
        <RentPage />

        <ContactsPage />
        {/* </WrapperStyle> */}
        </LayoutStyle>
      </ContainerStyle>
      </ThemeProvider>
    </>
  );
};

const ContainerStyle = styled.div`

  height: 100vh;
  overflow: scroll;
  `;

const WrapperStyle = styled.div`
  max-width: 1920px;
`;
const LayoutStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.BLACK_1};
  width: 100%;
`;

