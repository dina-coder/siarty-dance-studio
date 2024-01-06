import { Button, IconButton, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

import { COLORS, INTL } from "../../../../common/constants";

type TContactsPanelProps = {
  className?: string;
};

export const ContactsPanel = ({ className }: TContactsPanelProps) => (
  <WrapperStyle className={className}>
              <Typography color={COLORS.ACCENT} variant="h4" fontWeight={200}>
      {INTL.CONTACTS_PAGE.TITLE}
    </Typography>
    <Typography variant="body2" sx={{fontWeight: '600'}} color={COLORS.WHITE}>
Адрес    </Typography>
    <Typography variant="body2">
      г. Москва, ул. Кедрова, д. 4к2
    </Typography>
    <Typography variant="body2">
      (метро Академическая)
    </Typography>
    <Typography variant="body2" sx={{fontWeight: '600'}} color={COLORS.WHITE}>
Телефон    </Typography>
    <Button
      component={"a"}
      href="tel: +79691909666"
      target="_blank"
      size="large"
      variant="text"
      color="inherit"
      sx={{
        padding: 0,
        // margin: "24px 0 16px 0",

      }}
    >
      +7 (969) 190-96-66
    </Button>
    <ButtonsContainerStyled>
        <IconButton sx={{      "&:hover": {
        backgroundColor: COLORS.ACCENT
      }}} size="small"  href="https://wa.me/79691909666" target='_blank'>
      <ImgStyled src={require('../../../../assets/wa.png')} />
    </IconButton>

    <IconButton sx={{      "&:hover": {
        backgroundColor: COLORS.ACCENT
      }}}  size="small" href="https://t.me/siarty_dance_studio" target='_blank'>
      <ImgStyled src={require('../../../../assets/telegram.png')}/>
    </IconButton>
    <IconButton sx={{      "&:hover": {
        backgroundColor: COLORS.ACCENT
      }}}  size="small" href="https://vk.com/siarty_dancestudio" target='_blank'>
      <SmallImgStyled src={require('../../../../assets/vk.png')}/>
    </IconButton>

    </ButtonsContainerStyled>
  </WrapperStyle>
);

const WrapperStyle = styled.div`
padding: 40px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
  color: ${COLORS.WHITE};
  background-color: ${COLORS.BLACK_1};
`;

const ButtonsContainerStyled = styled.div`
  margin-top: 16px;
`;


const ImgStyled = styled.img`
  color: ${COLORS.WHITE};
  height: 24px;
`;

const SmallImgStyled = styled.img`
  color: ${COLORS.WHITE};
  height: 16px;
`;
