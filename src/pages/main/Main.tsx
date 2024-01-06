import React from "react";
import styled from "styled-components";
import { COLORS, INTL } from "../../common/constants";
import { Button, Typography } from "@mui/material";

type TMainProps = {
  className?: string;
};
export const MainPage = ({ className }: TMainProps) => {
  return (
    <MainSectionWrapper className={className} id='main'>
      <ButtonContainerStyle>
        <Typography variant="h3">{INTL.SIARTY_DANCE_STUDIO}</Typography>
        <Button
          component="a"
          href="https://wa.me/79691909666"
          target="_blank"
          sx={{
            mt: 3,
            "&.MuiButtonBase-root:hover": {
              bgcolor: COLORS.WHITE,
              borderColor: COLORS.WHITE,
              color: COLORS.BLACK_1,
            }
          }}
          variant="outlined"
          size="large"
          color="inherit"
        >
          {INTL.MAIN_PAGE.SIGN_UP}
        </Button>
      </ButtonContainerStyle>
      <VideoStyled
        src={require("../../assets/videoBg.mp4")}
        autoPlay
        loop
        muted
      />
    </MainSectionWrapper>
  );
};

const MainSectionWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonContainerStyle = styled.div`
  z-index: 1;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  color: ${COLORS.WHITE};
`;

const VideoStyled = styled.video`
  position: absolute;
  left: 0;
  top: 0;
  object-fit: cover;
  width: 100vw;
  height: 100vh;
`;
