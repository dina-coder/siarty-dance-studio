import React, { useEffect} from "react";
import styled from "styled-components";

import { ResetStyle } from "./reset";
import { HeaderContainer } from "./components/header/container/HeaderContainer";
import { ThemeProvider, Typography } from "@mui/material";
import { theme } from "./common/constants/theme";
import { TypographyStyle } from "./typography";
import { Route, Routes, useLocation } from "react-router-dom";
import { HomePage } from "./pages/homePage/HomePage";
import { LadyStylePage } from "./pages/ladyStylePage/LadyStylePage";
import { DancehallPage } from "./pages/dancehallPage/DancehallPage";
import { StretchPage } from "./pages/stretchPage/StretchPage";
import { StripPlasticPage } from "./pages/stripPlasticPage/StripPlasticPage";
import { TwerkPage } from "./pages/twerkPage/TwerkPage";
import { ChoreoPage } from "./pages/choreoPage/ChoreoPage";

export const App = () => {
  const pathname = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])

  return (
    <>
      <ResetStyle />
      <TypographyStyle />
      <ThemeProvider theme={theme}>
        <LayoutStyle>
        <HeaderContainer />
        <Routes>
          <Route path='/' element={<HomePage />} />
        <Route path='/choreo' element={<ChoreoPage />} />
        <Route path='/lady_style' element={<LadyStylePage />} />
        <Route path='/dancehall' element={<DancehallPage />} />
        <Route path='/stretching' element={<StretchPage />} />
        <Route path='/strip' element={<StripPlasticPage />} />
        <Route path='/twerk' element={<TwerkPage />} />
        </Routes>
        </LayoutStyle>
      </ThemeProvider>
    </>
  );
};


const LayoutStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

