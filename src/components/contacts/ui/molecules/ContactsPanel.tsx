import { Box, Button, IconButton, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

import { COLORS, INTL } from "../../../../common/constants";

type TContactsPanelProps = {
  className?: string;
};

export const ContactsPanel = ({ className }: TContactsPanelProps) => (
  <WrapperStyle className={className}>
        <ImgContainerStyled src={require("../../../../assets/logoColor.svg")} loading="lazy"/>
        <Typography variant='h4'>КОНТАКТЫ</Typography>
        <Typography
      component={"a"}
      href="tel: +79691909666"
      target="_blank"
      variant={"body1"}
      color={COLORS.WHITE}
    >
      +7 (969) 190-96-66
    </Typography>
    <Typography variant="body1">г. Москва, ул. Кедрова, д. 4к2</Typography>

        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A3da531cef0060c45bacf1fca7b87404433ad6ff9b20db608a83f776d9d903a02&amp;source=constructor"
          width="100%"
          height="400"
        />

    <ButtonsContainerStyled>
      <IconButton
        sx={{
          "&:hover": {
            backgroundColor: COLORS.ACCENT,
          },
        }}
        size="large"
        href="https://wa.me/79691909666"
        target="_blank"
      >
        <ImgStyled src={require("../../../../assets/wa.png")} loading="lazy" />
      </IconButton>
      <IconButton
        sx={{
          "&:hover": {
            backgroundColor: COLORS.ACCENT,
          },
        }}
        size="large"
        href="https://t.me/siarty_dance_studio"
        target="_blank"
      >
        <ImgStyled src={require("../../../../assets/telegram.png")} loading="lazy" />
      </IconButton>
      <IconButton
        sx={{
          "&:hover": {
            backgroundColor: COLORS.ACCENT,
          },
        }}
        size="large"
        href="https://vk.com/siarty_dancestudio"
        target="_blank"
      >
        <ImgStyled src={require("../../../../assets/vk.png")} loading="lazy" />
      </IconButton>
    </ButtonsContainerStyled>
  </WrapperStyle>
);

const WrapperStyle = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${COLORS.WHITE};
`;

const ButtonsContainerStyled = styled.div`
display: flex;
gap: 16px;
`;

const ImgContainerStyled = styled.img`
height: 100px;
margin-bottom: 24px;
`;

const ImgStyled = styled.img`
  color: ${COLORS.WHITE};
  width: 36px;
`;

const TypographyStyled = styled(Typography)`

`;
